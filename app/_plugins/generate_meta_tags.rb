require 'video_thumb'
require 'pragmatic_segmenter'

module GenerateMetaTags
  class Generator < Jekyll::Generator
    def generate(site)
      begin_benchmark
      load_regexes
      load_prefixes "/images/posts"
      generate_meta_tags site.collections["posts"]
      load_prefixes "/images/newsletters"
      generate_meta_tags site.collections["newsletters"]
      generate_people_meta_tags site.collections["people"]
      end_benchmark
    end

    def begin_benchmark
      @start = Time.now
      puts
      puts "Generating image and description meta tags on newsletters and blog posts..."
    end

    def end_benchmark
      @finish = Time.now
      puts "Done in #{ @finish - @start } seconds."
      puts
    end

    def load_regexes
      @img_tag_regex = /img.*?src="(.*?)"/i
      @img_md_regex = /\{%.*?include image.html.*?file=\'(.*?)\'.*?/i

      @vimeo_tag_regex = /player.vimeo.com\/video\/(.*?)\?/i
      @vimeo_md_regex = /\{%.*?include vimeo.html.*?id=\'(.*?)\'.*?/i

      @youtube_tag_regex = /youtube.com\/embed\/(.*?)"/i
      @youtube_md_regex = /\{%.*?include youtube.html.*?id=\'(.*?)\'.*?/i

      @paragraph_tag_regex = /<p>(.*)<\/p>/i
      @paragraph_wo_tag_regex = /^(?!<[a-z])(.*)\n/i
    end

    def load_prefixes(img_prefix)
      @img_url_prefix = img_prefix
      @vimeo_url_prefix = "http://vimeo.com/"
      @youtube_url_prefix = "http://www.youtube.com/watch?v="
    end

    def generate_meta_tags(collection)
      collection.docs.each do |item|
        if item.data['image'].nil? then
          generate_image_tag(item)
        end
        if item.data['description'].nil? then
          generate_description_tag(item)
        end
      end
    end

    def generate_people_meta_tags(collection)
      collection.docs.each do |item|
        item.data['image'] = "/images/people/#{item.data['slug']}.png"
        item.data['description'] = PragmaticSegmenter::Segmenter.new(text: item.data['excerpt'].to_s).segment[0]
      end
    end

    def generate_image_tag(item)
      image_url = get_image_url(item)

      if is_usable(image_url) then
        item.data['image'] = image_url
      end
    end

    def generate_description_tag(item)
      first_paragraph = get_first_paragraph(item.content)

      if is_usable(first_paragraph) then
        first_paragraph = strip_tags(first_paragraph)
        item.data['description'] = first_paragraph
      end
    end

    def get_image_url(item)
      type = discover_which_image_type(item.content)
      case type
      when :img
        get_img_tag_url(item)
      when :img_md
        get_img_md_url(item)
      when :vimeo
        get_vimeo_thumb_url(item)
      when :vimeo_md
        get_vimeo_md_url(item)
      when :youtube
        get_youtube_thumb_url(item)
      when :youtube_md
        get_youtube_md_url(item)
      end
    end

    def get_img_tag_url(item)
      item.content[@img_tag_regex, 1]
    end

    def get_img_md_url(item)
      file = item.content[@img_md_regex, 1]
      itempath = item.path.split('/')[-1]
      itempath = itempath.split('.')[0]
      "#{@img_url_prefix}/#{itempath}/#{file}"
    end

    def get_vimeo_thumb_url(item)
      id = item.content[@vimeo_tag_regex, 1]
      VideoThumb::get("#{@vimeo_url_prefix}#{id}", "max") || nil
    end

    def get_vimeo_md_url(item)
      id = item.content[@vimeo_md_regex, 1]
      VideoThumb::get("#{@vimeo_url_prefix}#{id}", "max") || nil
    end

    def get_youtube_thumb_url(item)
      id = item.content[@youtube_tag_regex, 1]
      VideoThumb::get("#{@youtube_url_prefix}#{id}", "max") || nil
    end

    def get_youtube_md_url(item)
      id = item.content[@youtube_md_regex, 1]
      VideoThumb::get("#{@youtube_url_prefix}#{id}", "max") || nil
    end

    def get_first_paragraph(content)
      @paragraph_type = discover_which_paragraph_type(content)
      case @paragraph_type
      when :with_tag
        content[@paragraph_tag_regex, 1]
      when :without_tag
        content[@paragraph_wo_tag_regex, 1]
      end
    end

    def strip_tags(content)
      rt = content.gsub(/<\/?[^>]*>/, "")
      if @paragraph_type == :without_tag
        rt = rt.gsub(/\(\/?[^>]*\)/, "")
        rt = rt.tr("[", "")
        rt = rt.tr("]", "")
      end
      rt
    end

    def discover_which_image_type(content)
      potentials = {
        img: find_first_position_of(@img_tag_regex, content),
        img_md: find_first_position_of(@img_md_regex, content),
        vimeo: find_first_position_of(@vimeo_tag_regex, content),
        vimeo_md: find_first_position_of(@vimeo_md_regex, content),
        youtube: find_first_position_of(@youtube_tag_regex, content),
        youtube_md: find_first_position_of(@youtube_md_regex, content)
      }
      (potentials.min_by {|k,v| v || 1000000}).first
    end

    def discover_which_paragraph_type(content)
      potentials = {
        with_tag: find_first_position_of(@paragraph_tag_regex, content),
        without_tag: find_first_position_of(@paragraph_wo_tag_regex, content)
      }
      (potentials.min_by {|k,v| v || 1000000}).first
    end

    def is_usable(src)
      !src.nil?
    end

    def find_first_position_of(needle, haystack)
      haystack =~ needle
    end
  end
end