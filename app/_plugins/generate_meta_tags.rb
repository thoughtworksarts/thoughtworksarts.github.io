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
      @img_md_regex = /\{%.*?include image.html.*?file=\'(.*?)\'.*?/i

      @vimeo_tag_regex = /player.vimeo.com\/video\/(.*?)\?/i
      @vimeo_md_regex = /\{%.*?include video.html.*?id=\'(.*?)\'.*?service='vimeo'.*?/i

      @youtube_tag_regex = /youtube.com\/embed\/(.*?)"/i
      @youtube_md_regex = /\{%.*?include video.html.*?id=\'(.*?)\'.*?/i

      @paragraph_tag_regex = /<p>(.*)<\/p>/i
      @paragraph_wo_tag_regex = /^(?!<[a-z])(.*)\n/i
    end

    def load_prefixes
      @img_url_prefix = "/images/posts"
      @vimeo_url_prefix = "http://vimeo.com/"
      @youtube_url_prefix = "http://www.youtube.com/watch?v="
    end

    def generate_meta_tags(site)
      site.posts.docs.each do |post|
        if post.data['image'].nil? then
          generate_image_tag(post)
        end
        if post.data['description'].nil? then
          generate_description_tag(post)
        end
      end
    end

    def generate_image_tag(post)
      image_url = get_image_url(post)

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

    def get_image_url(post)
      type = discover_which_image_type(post.content)
      case type
      when :img
        get_img_tag_url(post)
      when :img_md
        get_img_md_url(post)
      when :vimeo
        get_vimeo_thumb_url(post)
      when :vimeo_md
        get_vimeo_md_url(post)
      when :youtube
        get_youtube_thumb_url(post)
      when :youtube_md
        get_youtube_md_url(post)
      end
    end

    def get_img_tag_url(post)
      post.content[@img_tag_regex, 1]
    end

    def get_img_md_url(post)
      file = post.content[@img_md_regex, 1]
      postpath = post.path.split('/')[-1]
      postpath = postpath.split('.')[0]
      "#{@img_url_prefix}/#{postpath}/#{file}"
    end

    def get_vimeo_thumb_url(post)
      id = post.content[@vimeo_tag_regex, 1]
      VideoThumb::get("#{@vimeo_url_prefix}#{id}", "max") || nil
    end

    def get_vimeo_md_url(post)
      id = post.content[@vimeo_md_regex, 1]
      VideoThumb::get("#{@vimeo_url_prefix}#{id}", "max") || nil
    end

    def get_youtube_thumb_url(post)
      id = post.content[@youtube_tag_regex, 1]
      VideoThumb::get("#{@youtube_url_prefix}#{id}", "max") || nil
    end

    def get_youtube_md_url(post)
      id = post.content[@youtube_md_regex, 1]
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