import Header from "./components/header/Header.jsx";
import Landing from "./components/landing/Landing.jsx";
import Section from "./components/section/index.jsx";
import ProjectCard from "./components/projectCard/ProjectCard.jsx";
import {useNav} from "./contexts/navContext/NavContext.js";
import './App.css'

function App() {
  const {homeRef, workRef, aboutRef, contactRef} = useNav();

  return (
    <div className="container">
      <Header />
      <main>
        <Landing />
        <Section ref={workRef} className="work">
          <Section.Header>my work</Section.Header>
          <Section.Body>
            <div className="work__projects">
              <ProjectCard
                  imgUrl="https://images.unsplash.com/photo-1752350434950-50e8df9c268e"
                  title="Quiz App"
                  description="Quizzical is a simple quiz app that lets you select alternatives and then gives you a score. It's built with functional React components."
                  techStack={['HTML', 'CSS', 'JavaScript', 'React']}
                  demoLink="#"
                  githubLink="#"
              />
              <ProjectCard
                  imgUrl="https://images.unsplash.com/photo-1752654977019-8578b2905411"
                  title="Personal Dashboard"
                  description="A Chrome extension to help you focus and stay up-to-date."
                  techStack={['HTML', 'CSS', 'JavaScript', 'React']}
                  demoLink="#"
                  githubLink="#"
              />
              <ProjectCard
                  imgUrl="https://images.unsplash.com/photo-1744878150591-6ebf3a050d4f"
                  title="Password Generator"
                  description="An app that generates random passwords based on a few user inputs, e.g. length, types of characters, etc. Built with HTML, CSS, and vanilla JavaScript."
                  techStack={['HTML', 'CSS', 'JavaScript', 'React']}
                  demoLink="#"
                  githubLink="#"
              />
            </div>
          </Section.Body>
        </Section>
        <Section ref={aboutRef}>
          <Section.Header>about me</Section.Header>
          <Section.Body>about section</Section.Body>
        </Section>
        <Section ref={contactRef}>
          <Section.Header>get in touch</Section.Header>
          <Section.Body>this is the contact section</Section.Body>
        </Section>
      </main>
    </div>
  )
}

export default App
