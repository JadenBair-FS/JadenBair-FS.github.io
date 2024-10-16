import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import BentoBoxHeader from './components/BentoBox/BentoBoxHeader'
import BentoBoxImage from './components/BentoBox/BentoBoxWithImage'
import BentoBoxWithButton from './components/BentoBox/BentoBoxWithButton'
import BentoBoxContact from './components/BentoBox/BentoBoxContact'
import Modal from './components/Modal/Modal'
import ThemeToggle from './components/ThemeToggle/ThemeToggle';


import profilePhoto from './assets/profile-photo.jpeg'
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import project3 from './assets/project3.png'
import project4 from './assets/project4.png'


import './App.css'

function App() {

  const [showAboutMeModal, setShowAboutMeModal] = useState(false)
  const [showProject1Modal, setShowProject1Modal] = useState(false)
  const [showProject2Modal, setShowProject2Modal] = useState(false)
  const [showProject3Modal, setShowProject3Modal] = useState(false)
  const [showProject4Modal, setShowProject4Modal] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
 

  return (
    <div className="App">
      <div className="Top-Page">
        <ThemeToggle />
        <div className="top-pgroup">
          <a href="#projects"><p>Projects</p></a>
          <a href="#contact"><p>Contact me</p></a>
        </div>
      </div>
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
        <BentoBoxImage onClick={() => {setShowAboutMeModal(true); setModalOpen(true)}} box="headerBento2"  image={profilePhoto} alt="Profile photo of Jaden" />
        {showAboutMeModal && createPortal(
          <Modal isOpen={modalOpen} type="aboutMe" onClose={() => {setModalOpen(false); setShowAboutMeModal(false)}} />,
          document.body
        )}
        <div className="bento-button-container headerBento3">
          <BentoBoxWithButton box="buttonBento1" text="LinkedIn" link="https://www.linkedin.com/in/jadenbair" />
          <BentoBoxWithButton box="buttonBento2" text="Dribbble" link="https://dribbble.com/jadenbair"/>
          <BentoBoxWithButton box="buttonBento3" text="GitHub" link="https://github.com/JadenBair-FS"/>
        </div>
        </section>
        <section id="projects" className="Projects-Container">
          <BentoBoxImage onClick={() => {setShowProject1Modal(true); setModalOpen(true)}} image={project1} box="box1" alt="Project 1" />
          {showProject1Modal && createPortal(
            <Modal isOpen={modalOpen} type="project1" onClose={() => {setModalOpen(false); setShowProject1Modal(false)}} />,
            document.body
          )}
          <BentoBoxHeader 
            header="Projects"
            fourthLine="See some of my work below."
            fithLine="Click on them to learn more."
            box="box2"
           
          />
          <BentoBoxImage  onClick={() => {setShowProject3Modal(true); setModalOpen(true)}} image={project3} box="box3" alt="Project 3" />
          {showProject3Modal && createPortal(
            <Modal isOpen={modalOpen} type="project3" onClose={() => {setModalOpen(false); setShowProject3Modal(false)}} />,
            document.body
          )}
          <BentoBoxImage  onClick={() => {setShowProject2Modal(true); setModalOpen(true)}} image={project2} box="box5" alt="Project 2" />
          {showProject2Modal && createPortal(
            <Modal isOpen={modalOpen} type="project2" onClose={() => {setModalOpen(false); setShowProject2Modal(false)}} />,
            document.body
          )}
          <BentoBoxImage onClick={() => {setShowProject4Modal(true); setModalOpen(true)}} image={project4} box="box4" alt="Project 4" />
          {showProject4Modal && createPortal(
            <Modal isOpen={modalOpen} type="project4" onClose={() => {setModalOpen(false); setShowProject4Modal(false)}} />,
            document.body
          )}
        </section>
        <section id="contact" className="Contact-Container">
          <BentoBoxContact />
        </section>
    </div>
  )
}

export default App
