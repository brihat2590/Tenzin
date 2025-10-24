export default function Hero() {
    return (
      <section id="home" className="space-y-6 pt-6 py-2  text-center ">
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full flex items-center justify-center ">
            <img
              src="https://res.cloudinary.com/dlrpmew9d/image/upload/v1761117891/tenxinFormal_ltlfx1.jpg"
              alt="Tenzin Norgye Lama Tamang"
              className="w-28 h-28 rounded-full object-cover"
            />
          </div>
        </div>
  
        <div className="space-y-2">
          <h1 className="text-5xl font-bold tracking-tight">Tenzin Norgye Lama Tamang</h1>
          <p className="text-xl text-gray-400">Computer Science Student & Full-Stack Developer</p>
        </div>
  
        <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Passionate about building elegant, scalable solutions. I specialize in full-stack web development with a focus
          on clean code and user-centric design.
        </p>
      </section>
    )
  }
  