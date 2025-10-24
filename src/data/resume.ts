import { HomeIcon, NotebookIcon } from "lucide-react"

export const DATA = {
    
  
    work: [
      {
        company: "",
        title: "Frontend Developer Intern",
        start: "June 2024",
        end: "August 2024",
        description: "Built REST APIs and optimized database queries, reducing load time by 40%",
        badges: ["React", "Node.js", "PostgreSQL"],
      },
      {
        company: "Digital Solutions Co.",
        title: "Frontend Developer Intern",
        start: "January 2024",
        end: "April 2024",
        description: "Developed responsive UI components and improved accessibility scores",
        badges: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
    ],
  
    education: [
      {
        school: "State University",
        degree: "B.S. Computer Science",
        start: "2022",
        end: "2026",
      },
    ],
  
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Git",
      "REST APIs",
      "Full-Stack Development",
    ],
  
    projects: [
      {
        title: "AI Chat Application",
        description: "Real-time chat app with AI-powered responses and message history",
        technologies: ["Next.js", "OpenAI API", "Supabase"],
        dates: "2024",
      },
      {
        title: "Task Management System",
        description: "Collaborative task manager with real-time updates and team features",
        technologies: ["React", "Firebase", "Material-UI"],
        dates: "2023",
      },
      {
        title: "Portfolio Website",
        description: "Personal portfolio showcasing projects and technical skills",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
        dates: "2024",
      },
    ],
  
    contact: {
      email: "alex@example.com",
      phone: "+1 (555) 123-4567",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/blog", icon: NotebookIcon, label: "Blog" },
      ],

      
  }


