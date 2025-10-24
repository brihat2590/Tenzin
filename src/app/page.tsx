

import About from "@/components/main/about"
import Experience from "@/components/main/experience"
import Hero from "@/components/main/hero"
import Projects from "@/components/main/projects"
import Skills from "@/components/main/skills"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main className="min-h-screen  text-white ">
      <div className="max-w-2xl mx-auto px-6 py-12 space-y-16 bg-[1e1e1e] border-2  my-2  ">
      {/* <Navbar/> */}
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        
      </div>
    </main>
  )
}
