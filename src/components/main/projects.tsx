const projects = [
    {
      title: "AI Medical Assistant",
      description: "Smart AI chatbot for medical consultations and health advice",
      tags: ["Gemini API", "RAG", "Steamlit", "Python"],
    },
    {
      title: "Thangka Ecommerce Platform",
      description: "Full featured ecommerce platform for traditional Thangka art",
      tags: ["Next js", "Stripe", "Clerk js", "TypeScript"],
    },
    {
      title: "House Price Predictor",
      description: "Personal portfolio showcasing projects and technical skills",
      tags: ["Flask", "Bootstrap", "MongoDB", "Python"],
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
  