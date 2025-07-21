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
                  imgUrl="https://images.unsplash.com/photo-1752834370400-da734c87f565"
                  title="Quiz App"
                  description="Simple quiz app that lets you select alternatives and then gives you a score."
                  techStack={['HTML', 'CSS', 'JavaScript', 'React']}
                  demoLink="#"
                  githubLink="#"
              />
              <ProjectCard
                  imgUrl="https://images.unsplash.com/photo-1752835178514-f31f93a3b540"
                  title="Personal Dashboard"
                  description="A Chrome extension to help you focus and stay up-to-date."
                  techStack={['HTML', 'CSS', 'JavaScript', 'React']}
                  demoLink="#"
                  githubLink="#"
              />
              <ProjectCard
                  imgUrl="https://images.unsplash.com/photo-1752805252779-000e9d493b1f"
                  title="Password Generator"
                  description="An app that generates random passwords based on a few user inputs."
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
