module Personnel
  class Generator < Jekyll::Generator
    def generate(site)
      site.collections['personnel'].docs.each do |person|
        person.data['projects'] = []
        site.collections['projects'].docs.each do |project|
          assign_artist_projects(person, project)
          assign_collaborator_projects(person, project)
        end
      end
    end

    def assign_artist_projects(person, project)
      project.data['team'].each do |member|
        if member['name'] == person.data['name']
          assign person, project
        end
      end
    end

    def assign_collaborator_projects(person, project)
      if project.data['artist'] == person.data['name']
        assign person, project
      end
    end

    def assign(person, project)
      person.data['projects'] << {'projectid'=>project.data['projectid']}
    end
  end
end