import { Briefcase } from "lucide-react"

const experiences = [
  {
    company: "Pacific Human Resources",
    position: "Frontend Developer Intern",
    period: "June 2024 - August 2024",
    description: "Worked with React js to create responsive, user-friendly, and visually appealing interfaces.",
  },
  
]

export default function Experience() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Experience</h2>
      <div className="space-y-3">
        {experiences.map((exp, index) => (
          <div key={index} className="border border-white/10 rounded p-4 hover:border-white/30 transition-colors">
            <div className="flex items-start gap-3">
              <Briefcase className="w-4 h-4 mt-1 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white">{exp.company}</h3>
                <p className="text-sm text-gray-400">{exp.position}</p>
                <p className="text-xs text-gray-500 mt-1">{exp.period}</p>
                <p className="text-sm text-gray-300 mt-2">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
