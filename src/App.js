import React from 'react'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import Header from './components/header'
import Project from './components/projects'
import Skills from './components/skills'
import Work from './components/work'
import Research from './components/research'
function App() {
  return (
    <div>
      <section id="header">
        <Header/>
      </section>
      <section id ="about">
        <About/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="work">
        <Work/>
      </section>
      <section id="research">
        <Research/>
      </section>
      <section id="projects">
        <Project/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <Footer/>
    </div>
  )
}

export default App
