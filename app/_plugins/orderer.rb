module Orderer
  class Generator < Jekyll::Generator
    def generate(site)
      order_project_teams_by_lastname site
      order_personnel_by_lastname site
      order_personnel_by_season site
    end

    def order_project_teams_by_lastname(site)
      site.collections['projects'].docs.each do |project|
        project.data['team'].each do |member|
          member['lastname'] = member['name'].split.last
        end
      end
    end

    def order_personnel_by_season(site)
      seasons = { 'Winter'=>1, 'Summer'=>2, 'Fall'=>3 }
      site.collections['personnel'].docs.each do |person|
        if person.data['season']
          season = person.data['season'].split ' '
          person.data['season-code'] = "#{season[1]}-#{seasons[season[0]]}"
        end
      end
    end

    def order_personnel_by_lastname(site)
      site.collections['personnel'].docs.each do |person|
        person.data['lastname'] = person.data['name'].split.last
      end
    end
  end
end