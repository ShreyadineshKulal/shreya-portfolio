import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Navbar/Home/Home'
import AboutMe from './Components/Navbar/About/AboutMe'
import Education from './Components/Education/Education'
import Projects from './Components/Projects/Projects'
import Certifications from './Components/Certifications/Certifications'
import Experience from './Components/Experience/Experience'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <div>
    <Navbar/>
    <Home/>
    <AboutMe/>
    <Education/>
    <Projects/>
    <Certifications/>
    <Experience/>
    <Contact/>
    <Footer/>
  

      

    </div>
  )
}

export default App