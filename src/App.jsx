import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import BentoBoxHeader from "./components/BentoBox/BentoBoxHeader";
import BentoBoxImage from "./components/BentoBox/BentoBoxWithImage";
import BentoBoxWithButton from "./components/BentoBox/BentoBoxWithButton";
import BentoBoxContact from "./components/BentoBox/BentoBoxContact";
import Modal from "./components/Modal/Modal";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

import profilePhoto from "./assets/profile-photo.webp";
import project1 from "./assets/project1.webp";
import project2 from "./assets/project2.webp";
import project3 from "./assets/project3.webp";
import project4 from "./assets/project4.webp";

import "./App.css";

function App() {
  const [showAboutMeModal, setShowAboutMeModal] = useState(false);
  const [showProject1Modal, setShowProject1Modal] = useState(false);
  const [showProject2Modal, setShowProject2Modal] = useState(false);
  const [showProject3Modal, setShowProject3Modal] = useState(false);
  const [showProject4Modal, setShowProject4Modal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");

    body.style.overflow = modalOpen ? "hidden" : "auto";
  }, [modalOpen]);

  return (
    <div className="App">
      <div className="Top-Page">
        <ThemeToggle />
        <div className="top-pgroup">
          <a href="#projects">
            <p>Projects</p>
          </a>
          <a href="#contact">
            <p>Contact me</p>
          </a>
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
        <BentoBoxImage
          onClick={() => {
            setShowAboutMeModal(true);
            setModalOpen(true);
          }}
          box="headerBento2"
          image={profilePhoto}
          alt="Profile photo of Jaden"
        >
          <h2>Click to learn about me.</h2>
        </BentoBoxImage>
        {showAboutMeModal &&
          createPortal(
            <Modal
              isOpen={modalOpen}
              type="aboutMe"
              onClose={() => {
                setModalOpen(false);
                setShowAboutMeModal(false);
              }}
            >
              <h1>About Me</h1>
              <p>Full Stack Developer with a Sales background.</p>
              <p>
                My goal is to create beautiful and functional applications that
                help people connect and communicate.
              </p>
              <p>
                When I'm not coding, you can find me hiking, playing video
                games, or watching movies.
              </p>
            </Modal>,
            document.body
          )}
        <div className="bento-button-container headerBento3">
          <BentoBoxWithButton
            box="buttonBento1"
            text="LinkedIn"
            link="https://www.linkedin.com/in/jadenbair"
          />
          <BentoBoxWithButton
            box="buttonBento2"
            text="Dribbble"
            link="https://dribbble.com/jadenbair"
          />
          <BentoBoxWithButton
            box="buttonBento3"
            text="GitHub"
            link="https://github.com/JadenBair-FS"
          />
        </div>
      </section>
      <section id="projects" className="Projects-Container">
        <BentoBoxImage
          onClick={() => {
            setShowProject2Modal(true);
            setModalOpen(true);
          }}
          image={project2}
          box="box1"
          alt="Project 2"
        >
          <h2>Click to learn more about this project.</h2>
        </BentoBoxImage>
        {showProject2Modal &&
          createPortal(
            <Modal
              isOpen={modalOpen}
              type="project2"
              onClose={() => {
                setModalOpen(false);
                setShowProject2Modal(false);
              }}
            >
              <h1>Project 2</h1>
              <p>
                Project 2 is a full stack application that allows users to
                search for and save recipes.
              </p>
            </Modal>,
            document.body
          )}
        <BentoBoxHeader
          header="Projects"
          fourthLine="See some of my work below."
          fithLine="Click on them to learn more."
          box="box2"
        />
        <BentoBoxImage
          onClick={() => {
            setShowProject3Modal(true);
            setModalOpen(true);
          }}
          image={project3}
          box="box3"
          alt="Project 3"
        >
          <h2>Click to learn more about this project.</h2>
        </BentoBoxImage>
        {showProject3Modal &&
          createPortal(
            <Modal
              isOpen={modalOpen}
              type="project3"
              onClose={() => {
                setModalOpen(false);
                setShowProject3Modal(false);
              }}
            >
              <h1>Project 3</h1>
              <p>
                Project 3 is a full stack application that allows users to
                search for and save recipes.
              </p>
            </Modal>,
            document.body
          )}
        <BentoBoxImage
          onClick={() => {
            setShowProject1Modal(true);
            setModalOpen(true);
          }}
          image={project1}
          box="box5"
          alt="Project 1"
        >
          <h2>Click to learn more about this project.</h2>
        </BentoBoxImage>
        {showProject1Modal &&
          createPortal(
            <Modal
              isOpen={modalOpen}
              type="project1"
              onClose={() => {
                setModalOpen(false);
                setShowProject1Modal(false);
              }}
            >
              <h1>Project 1</h1>
              <p>
                Project 1 is a full stack application that allows users to
                search for and save recipes.
              </p>
            </Modal>,
            document.body
          )}
        <BentoBoxImage
          onClick={() => {
            setShowProject4Modal(true);
            setModalOpen(true);
          }}
          image={project4}
          box="box4"
          alt="Project 4"
        >
          <h2>Click to learn more about this project.</h2>
        </BentoBoxImage>
        {showProject4Modal &&
          createPortal(
            <Modal
              isOpen={modalOpen}
              type="project4"
              onClose={() => {
                setModalOpen(false);
                setShowProject4Modal(false);
              }}
            >
              <h1>Project 4</h1>
              <p>
                Project 4 is a full stack application that allows users to
                search for and save recipes.
              </p>
            </Modal>,
            document.body
          )}
      </section>
      <section id="contact" className="Contact-Container">
        <BentoBoxContact />
      </section>
    </div>
  );
}

export default App;
