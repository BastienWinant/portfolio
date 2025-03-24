import './App.css'
import Header from './components/Header/Header'
import Section from './components/Section/index'
import Project from './components/Project/Project'

function App() {
  return (
    <div className="app--container">
      <Header />
      <main>
        <section className="hero">
          <div className="hero--container">
            <h1>Bastien Winant</h1>
            <p>Full-stack developer based in Luxembourg</p>
            <button type="button" className="hero--cta-btn">Get in touch</button>
          </div>
        </section>
        <Section>
          <Section.Header>my work</Section.Header>
          <Section.Body>
            <div className="projects">
              <Project />
              <Project />
              <Project />
            </div>
          </Section.Body>
        </Section>
        <Section>
          <Section.Header>about me</Section.Header>
          <Section.Body>This is the about section.</Section.Body>
        </Section>
        <Section>
          <Section.Header>get in touch</Section.Header>
          <Section.Body>This is the about section.</Section.Body>
        </Section>
      </main>
    </div>
  )
}

export default App
