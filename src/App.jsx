import Header from "./components/header/Header.jsx";
import Landing from "./components/landing/Landing.jsx";
import Section from "./components/section/index.jsx";
import {useNav} from "./contexts/navContext/NavContext.js";
import './App.css'

function App() {
  const {homeRef, workRef, aboutRef, contactRef} = useNav();

  return (
    <>
      <Header />
      <main>
        <Landing />
        <Section ref={workRef}>
          <Section.Header>work</Section.Header>
          <Section.Body>this is the work section</Section.Body>
        </Section>
        <Section ref={aboutRef}>
          <Section.Header>about</Section.Header>
          <Section.Body>this is the about section</Section.Body>
        </Section>
        <Section ref={contactRef}>
          <Section.Header>contact</Section.Header>
          <Section.Body>this is the contact section</Section.Body>
        </Section>
      </main>
    </>
  )
}

export default App
