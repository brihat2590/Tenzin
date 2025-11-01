type EducationItem = {
    school: string;
    degree: string;
    period: string;
    details: string[];
    
    link?: string;
  };
  
  const education: EducationItem[] = [
    {
      school: "Jain University FET",
      degree: "Bachelor of Technology",
      period: "2022 — 2026",
      details: [
        "Computer Science and Engineering",
        "CGPA: 8.7/10",
      ],
      
    link: "",
    },
    // {
    //   school: "Frontend Academy",
    //   degree: "Diploma in Frontend Development",
    //   period: "2023 — 2024",
    //   details: [
    //     "Projects focused on Next.js, React, and UI/UX",
    //     "Capstone: Portfolio and SPA demonstrations",
    //   ],
     
    //   link: "",
    // },
  ];
  
  export default function Education() {
    return (
      <section className="space-y-6 py-6">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="space-y-4">
          {education.map((ed, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded p-4 hover:border-white/25 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-white">{ed.school}</h3>
                  <p className="text-sm text-gray-300">
                    {ed.degree}  <span className="pl-2">•{ed.period}</span>
                  </p>
                </div>
                
              </div>
              <ul className="mt-1 space-y-1">
                {ed.details.map((d, i) => (
                  <li key={i} className="text-sm text-gray-300">
                    {d}
                  </li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>
      </section>
    );
  }
  