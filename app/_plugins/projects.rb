module Projects
  class Generator < Jekyll::Generator
    def generate(site)
      site.collections['projects'].docs.each do |project|
        build_project_id project
      end
    end

    def build_project_id(project)
      project.data['projectid'] = project.data['title'].dup
      project.data['projectid'].downcase!
      project.data['projectid'].gsub!(' ','-')
    end
  end
end