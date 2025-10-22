const projects = [
    {
      title: "AI Chat Application",
      description: "Real-time chat app with AI-powered responses and message history",
      tags: ["Next.js", "OpenAI API", "Supabase"],
    },
    {
      title: "Task Management System",
      description: "Collaborative task manager with real-time updates and team features",
      tags: ["React", "Firebase", "Tailwind CSS"],
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and technical skills",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
  ]
  
  export default function Projects() {
    return (
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="space-y-3">
          {projects.map((project, index) => (
            <div key={index} className="border border-white/10 rounded p-4 hover:border-white/30 transition-colors">
              <h3 className="font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{project.description}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  