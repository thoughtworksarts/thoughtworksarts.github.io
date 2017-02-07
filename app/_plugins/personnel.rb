module Personnel
  class Generator < Jekyll::Generator
    def generate(site)
      prepare_class_vars site
      assign_personnel_first_pass
      merge_member_projects_to_groups
    end

    #Collections & selctions
    def prepare_class_vars(site)
      @personnel = site.collections['personnel'].docs
      @projects = site.collections['projects'].docs
    end

    def groups
      @personnel.select { |person| person.data['occupation'] == 'Artist Group' }
    end

    def group_members group
      @personnel.select { |person| person.data['group'] == group.data['name'] }
    end

    #Functions
    def assign_personnel_first_pass
      @personnel.each do |person|
        build_image_link person
        assign_projects person
      end
    end

    def build_image_link(person)
      person.data['photo'] = "#{person.data['name']}.png"
      person.data['photo'].downcase!
      person.data['photo'].gsub!(' ','-')
    end

    def assign_projects(person)
      person.data['projects'] = []
      @projects.each do |project|
        assign_artist_projects(person, project)
        assign_collaborator_projects(person, project)
      end
    end

    def assign_artist_projects(person, project)
      if project.data['artist'] == person.data['name']
        assign person, project
      end
    end

    def assign_collaborator_projects(person, project)
      project.data['team'].each do |member|
        if member['name'] == person.data['name']
          assign person, project
        end
      end
    end

    def assign(person, project)
      person.data['projects'] << {'projectid'=>project.data['projectid']}
    end

    def merge_member_projects_to_groups
      groups.each do |group|
        group_members(group).each do |member|
          group.data['projects'] |= member.data['projects']
        end
      end
    end
  end
end