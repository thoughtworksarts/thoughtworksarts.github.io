require 'video_thumb'

module GenerateMetaTags
  class Generator < Jekyll::Generator
    def generate(site)
      begin_benchmark
      load_regexes
      load_prefixes
      generate_meta_tags site
      end_benchmark
    end

    def begin_benchmark
      @start = Time.now
      puts
      puts "Generating image and description meta tags on posts..."
    end

    def end_benchmark
      @finish = Time.now
      puts "Done in #{ @finish - @start } seconds."
      puts
    end

    def load_regexes
      @img_tag_regex = /img.*?src="(.*?)"/i
      @vimeo_tag_regex = /player.vimeo.com\/video\/(.*?)\?/i
      @youtube_tag_regex = /youtube.com\/embed\/(.*?)"/i
      @paragraph_tag_regex = /<p>(.*)<\/p>/i
      @paragraph_wo_tag_regex = /^(?!<[a-z])(.*)\n/i
    end

    def load_prefixes
      @vimeo_url_prefix = "http://vimeo.com/"
      @youtube_url_prefix = "http://www.youtube.com/watch?v="
    end

    def generate_meta_tags(site)
      site.posts.each do |post|
        if post.data['image'].nil? then
          generate_image_tag(post)
        end
        if post.data['description'].nil? then
          generate_description_tag(post)
        end
      end
    end

    def generate_image_tag(post)
      image_url = get_image_url(post.content)

      if is_usable(image_url) then
        post.data['image'] = image_url
      end
    end

    def generate_description_tag(post)
      first_paragraph = get_first_paragraph(post.content)

      if is_usable(first_paragraph) then
        first_paragraph = strip_tags(first_paragraph)
        post.data['description'] = first_paragraph
      end
    end

    def get_image_url(content)
      type = discover_which_image_type(content)
      case type
      when :img
        get_img_tag_url(content)
      when :vimeo
        get_vimeo_thumb_url(content)
      when :youtube
        get_youtube_thumb_url(content)
      end
    end

    def get_img_tag_url(content)
      content[@img_tag_regex, 1]
    end

    def get_vimeo_thumb_url(content)
      id = content[@vimeo_tag_regex, 1]
      VideoThumb::get("#{@vimeo_url_prefix}#{id}", "max") || nil
    end

    def get_youtube_thumb_url(content)
      id = content[@youtube_tag_regex, 1]
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
        vimeo: find_first_position_of(@vimeo_tag_regex, content),
        youtube: find_first_position_of(@youtube_tag_regex, content)
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
      (haystack.enum_for(:scan, needle).map { Regexp.last_match.begin(0) }).first
    end
  end
end