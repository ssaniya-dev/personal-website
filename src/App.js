import React from 'react'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import Header from './components/header'
import Project from './components/projects'
import Skills from './components/skills'
import Work from './components/work'
function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Skills/>
      <Work/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
