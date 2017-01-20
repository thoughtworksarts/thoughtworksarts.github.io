module Orderer
  class Generator < Jekyll::Generator
    def generate(site)
      site.collections['projects'].docs.each do |project|
        project.data['team'].each do |member|
            member['lastname'] = member['name'].split.last
        end
      end
    end
  end
end