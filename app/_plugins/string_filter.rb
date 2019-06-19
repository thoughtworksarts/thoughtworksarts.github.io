require 'active_support/all'

module Jekyll
  module StringFilter
    def truncate(str, len)
      stripped = strip_html(str)
      truncated = stripped.truncate(len, separator: ' ')
      truncated = truncated.gsub(/[^a-zA-Z]+$/, '')
      truncated == stripped ? truncated : truncated + '...'
    end
  end
end

Liquid::Template.register_filter(Jekyll::StringFilter)