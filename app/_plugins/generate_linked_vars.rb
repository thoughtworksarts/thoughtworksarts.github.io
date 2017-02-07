module GenerateLinkedVars
  class Generator < Jekyll::Generator
    def generate(site)
      prepare_class_vars site
      build_project_ids
      build_person_photos
      assign_people_projects
    end

    #Collections & selections
    def prepare_class_vars(site)
      @people = site.collections['people'].docs
      @projects = site.collections['projects'].docs
    end

    def groups
      @people.select { |person| person.data['occupation'] == 'Artist Group' }
    end

    def group_members group
      @people.select { |person| person.data['group'] == group.data['name'] }
    end

    #Functions
    def build_project_ids
      @projects.each do |project|
        project.data['projectid'] = project.data['title'].dup
        project.data['projectid'].downcase!
        project.data['projectid'].gsub!(' ','-')
      end
    end

    def build_person_photos
      @people.each do |person|
        person.data['photo'] = "#{person.data['name']}.png"
        person.data['photo'].downcase!
        person.data['photo'].gsub!(' ','-')
      end
    end

    def assign_people_projects
      @people.each do |person|
        person.data['projects'] = []
        @projects.each do |project|
          assign_artist_projects(person, project)
          assign_collaborator_projects(person, project)
        end
      end
      merge_group_member_projects_to_groups
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

    def merge_group_member_projects_to_groups
      groups.each do |group|
        group_members(group).each do |member|
          group.data['projects'].concat(member.data['projects']).uniq
        end
      end
    end
  end
end