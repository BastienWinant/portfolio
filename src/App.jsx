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
                  description="Fictional online platform for renting personal parking spots near major venues."
                  techStack={['TypeScript', 'React', 'Firebase Realtime Database', 'TicketMaster API']}
                  demoLink="#"
                  githubLink="#"
              />
              <ProjectCard
                  imgUrl="https://images.unsplash.com/photo-1617380613434-7495e9b45dfb"
                  title="Himalayan DB API"
                  description="A RESTful API that provides access to the Himalayan DB data."
                  techStack={['Django', 'PostgreSQL', 'AWS API Gateway']}
                  demoLink="#"
                  githubLink="#"
              />
              <ProjectCard
                  imgUrl="https://images.unsplash.com/photo-1752805252779-000e9d493b1f"
                  title="Color Scheme Generator"
                  description="An app that lets users generate, modify, and save color palettes."
                  techStack={['React', 'Firebase Realtime Database', 'Firebase Authentication', 'Chakra UI']}
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
