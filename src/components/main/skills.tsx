"use client"

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiExpress,
  SiGit,
  SiDocker,
  SiVercel,
  SiAmazon,
  SiMongodb,
  SiFirebase,
  SiPostman,
  
} from "react-icons/si"
import { TbApi } from "react-icons/tb"
import { IconType } from "react-icons"

type Skill = {
  name: string
  icon: IconType
}

type SkillCategory = {
  category: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "JavaScript", icon: SiJavascript },
      
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "PostgreSQL", icon: SiPostgresql },
      {name:"MongoDB",icon:SiMongodb},
      { name: "REST APIs", icon: TbApi },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
      {name:"Firebase",icon:SiFirebase},
      {name:"Postman",icon:SiPostman},
    ],
  },
]

export default function Skills() {
  return (
    <section className="space-y-6 pb-10">
      <h2 className="text-2xl font-bold text-white">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((cat, catIndex) => (
          <div key={catIndex} className="space-y-4">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wide">
              {cat.category}
            </h3>

            <div className="flex flex-wrap gap-4">
              {cat.skills.map((skill, skillIndex) => {
                const IconComponent = skill.icon
                return (
                  <div
                    key={skillIndex}
                    className="group flex flex-col items-center gap-2 cursor-pointer"
                  >
                    <div className="w-16 h-16 flex items-center justify-center text-white">
                      <IconComponent size={36} />
                    </div>
                    <span
                      className="text-xs text-gray-400 text-center font-medium transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:tracking-wide"
                    >
                      {skill.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
