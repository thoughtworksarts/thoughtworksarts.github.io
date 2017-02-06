module Personnel
  class Generator < Jekyll::Generator
    def generate(site)
      site.collections['personnel'].docs.each do |person|
        build_image_link person
        build_project_list person, site.collections['projects'].docs
      end
    end

    def build_image_link(person)
      person.data['photo'] = "#{person.data['name']}.png"
      person.data['photo'].downcase!
      person.data['photo'].gsub!(' ','-')
    end

    def build_project_list(person, projects)
      person.data['projects'] = []
      projects.each do |project|
        assign_artist_projects(person, project)
        assign_group_projects(person, project)
        assign_collaborator_projects(person, project)
      end
    end

    def assign_artist_projects(person, project)
      project.data['team'].each do |member|
        if member['name'] == person.data['name']
          assign person, project
        end
      end
    end

    def assign_group_projects(person, project)
      if project.data['group'] == person.data['name']
        assign person, project
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