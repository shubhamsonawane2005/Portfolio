import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

import { skillCategories } from './data/skills'

function App() {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    // Slight delay to ensure DOM is ready
    setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal')
      revealElements.forEach((el) => observer.observe(el))
    }, 100)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <div className="bento-wrapper">
        <main className="bento-grid">
          <Hero />
          
          <About />
          
          <Skills 
            title="Frontend" 
            skills={skillCategories[0].skills} 
            className="col-span-1 row-span-1"
            delay="0.2s"
          />
          
          <Skills 
            title="Backend" 
            skills={skillCategories[1].skills} 
            className="col-span-1 row-span-1"
            delay="0.3s"
          />
          
          <Skills 
            title="Database & Tools" 
            skills={skillCategories[2].skills} 
            className="col-span-2 row-span-1"
            delay="0.4s"
          />

          <Projects />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
