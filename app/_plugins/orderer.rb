module Orderer
  class Generator < Jekyll::Generator
    def generate(site)
      site.collections['projects'].docs.each do |project|
        project.data['teamMembers'].each do |teamMember|
            teamMember['lastname'] = teamMember['name'].split.last
        end
      end
    end
  end
end