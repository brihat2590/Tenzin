"use client"

import { useState } from "react"
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
} from "react-icons/si"
import { TbApi } from "react-icons/tb"
import { IconType } from "react-icons"

type Skill = {
  name: string
  icon: IconType
  color: string
}

type SkillCategory = {
  category: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "from-blue-400 to-blue-600" },
      { name: "Next.js", icon: SiNextdotjs, color: "from-gray-300 to-gray-500" },
      { name: "TypeScript", icon: SiTypescript, color: "from-blue-500 to-blue-700" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "from-cyan-400 to-cyan-600" },
      { name: "JavaScript", icon: SiJavascript, color: "from-yellow-400 to-yellow-600" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "from-green-400 to-green-600" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "from-blue-500 to-blue-700" },
      { name: "REST APIs", icon: TbApi, color: "from-purple-400 to-purple-600" },
      { name: "Express.js", icon: SiExpress, color: "from-gray-400 to-gray-600" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "from-orange-400 to-orange-600" },
      { name: "Docker", icon: SiDocker, color: "from-blue-400 to-blue-600" },
      { name: "Vercel", icon: SiVercel, color: "from-gray-300 to-gray-500" },
      { name: "AWS", icon: SiAmazon, color: "from-orange-400 to-orange-600" },
    ],
  },
]

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((cat, catIndex) => (
          <div key={catIndex} className="space-y-4">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wide">{cat.category}</h3>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, skillIndex) => {
                const skillId = `${catIndex}-${skillIndex}`
                const isHovered = hoveredSkill === skillId
                const IconComponent = skill.icon

                return (
                  <div
                    key={skillIndex}
                    className="group flex flex-col items-center gap-2 cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(skillId)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="relative">
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} blur-md transition-all duration-500 ${
                          isHovered ? "opacity-75 scale-110" : "opacity-0 scale-100"
                        }`}
                      />

                      <div
                        className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white shadow-lg transition-all duration-500 ${
                          isHovered ? "scale-110 rotate-6 shadow-2xl" : "scale-100 rotate-0"
                        }`}
                        style={{
                          animation: isHovered ? "pulse 1s ease-in-out infinite" : "none",
                        }}
                      >
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />

                        <IconComponent
                          className={`relative z-10 transition-all duration-500 ${
                            isHovered ? "scale-110 rotate-12" : "scale-100 rotate-0"
                          }`}
                          size={32}
                        />

                        <div
                          className={`absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/30 to-transparent transition-all duration-700 ${
                            isHovered ? "translate-x-full" : "-translate-x-full"
                          }`}
                          style={{ transform: `skewX(-20deg)` }}
                        />
                      </div>

                      {isHovered && (
                        <>
                          <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-white/50 rounded-tl-lg animate-pulse" />
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-white/50 rounded-br-lg animate-pulse" />
                        </>
                      )}
                    </div>

                    <span
                      className={`text-xs text-center font-medium transition-all duration-300 ${
                        isHovered ? "text-white scale-105" : "text-gray-400 scale-100"
                      }`}
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

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1.1) rotate(6deg);
          }
          50% {
            transform: scale(1.15) rotate(6deg);
          }
        }
      `}</style>
    </section>
  )
}
