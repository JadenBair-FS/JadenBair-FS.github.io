import React from 'react'
import BentoBoxHeader from './components/BentoBox/BentoBoxHeader'
import BentoBoxImage from './components/BentoBox/BentoBoxWithImage'
import BentoBoxWithButton from './components/BentoBox/BentoBoxWithButton'
import BentoBoxContact from './components/BentoBox/BentoBoxContact'



import profilePhoto from './assets/profile-photo.jpeg'
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import project3 from './assets/project3.png'
import project4 from './assets/project4.png'


import './App.css'

function App() {

  return (
    <div className="App">
      <section className="Header-Container">
        <BentoBoxHeader
          header="Hi, I am Jaden!"
          firstLine="Crafting Code."
          secondLine="Desiging Experiences."
          thirdLine="Building Connections."
          fourthLine="Full Stack Developer"
          fithLine="with a Sales background."
          box="headerBento1"
          
        />
        <BentoBoxImage fade="fade-down" box="headerBento2" image={profilePhoto} alt="Profile photo of Jaden" />
        <div className="bento-button-container headerBento3">
          <BentoBoxWithButton box="buttonBento1" text="LinkedIn" />
          <BentoBoxWithButton box="buttonBento2" text="Dribbble"/>
          <BentoBoxWithButton box="buttonBento3" text="GitHub" />
        </div>
        </section>
        <section className="Projects-Container">
          <BentoBoxImage image={project1} box="box1" alt="Project 1" />
          <BentoBoxHeader 
            header="Projects"
            fourthLine="See some of my work below."
            fithLine="Click on them to learn more."
            box="box2"
           
          />
          <BentoBoxImage  image={project3} box="box3" alt="Project 3" />
          <BentoBoxImage  image={project2} box="box5" alt="Project 2" />
          <BentoBoxImage  image={project4} box="box4" alt="Project 4" />
        </section>
        <section  className="Contact-Container">
          <BentoBoxContact />
        </section>
    </div>
  )
}

export default App
