module GenerateSortVars
  class Generator < Jekyll::Generator
    def generate(site)
      order_project_teams_by_lastname site
      order_projects_by_season site
      order_people_by_lastname site
      order_people_by_season site
    end

    def order_project_teams_by_lastname(site)
      site.collections['projects'].docs.each do |project|
        project.data['team'].each do |member|
          member['lastname'] = member['name'].split.last
        end
      end
    end

    def order_projects_by_season(site)
      order_collection_by_season site.collections['projects'].docs
    end

    def order_people_by_season(site)
      order_collection_by_season site.collections['people'].docs
    end

    def order_people_by_lastname(site)
      site.collections['people'].docs.each do |person|
        person.data['lastname'] = person.data['name'].split.last
      end
    end

    def order_collection_by_season collection
      seasons = { 'Winter'=>1, 'Summer'=>2, 'Fall'=>3 }
      collection.each do |item|
        if item.data['season']
          season = item.data['season'].split ' '
          order_within_season = item.data['order-within-season'] ? "-#{100-item.data['order-within-season']}" : ''
          item.data['season-code'] = "#{season[1]}-#{seasons[season[0]]}#{order_within_season}"
        end
      end
    end
  end
end