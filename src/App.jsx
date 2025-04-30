import React from 'react'
import Navbar from './assets/components/Navbar'
import Hero from './assets/components/Hero'
import Technologies from './assets/components/Technologies'
import Projects from './assets/components/Projects'
import Experience from './assets/components/Experience'
import Contact from './assets/components/Contact'


const App = () => {
  return (
    <div className="overflow-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px]
           rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),
           rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] 
          rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),
          rgba(255,255,255,0))]"></div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div> 
  )
}

export default App