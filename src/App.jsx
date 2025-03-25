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
              <Project
                imgUrl="https://images.unsplash.com/photo-1741145018917-216c9275bc3a"
                name="personal dashboard"
                description="A Chrome extension to help you focus and stay up-to-date."
                techstack={['HTML', 'CSS', 'JavaScript', 'React']}
              />
              <Project
                imgUrl="https://images.unsplash.com/photo-1742783201678-33840ee6ee0b"
                name="password generator"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                eius."
                techstack={['React', 'NextJS', 'Node', 'MongoDB']}
              />
              <Project
                imgUrl="https://images.unsplash.com/photo-1742412615574-ce65e63598d8"
                name="quizzical app"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                eius."
                techstack={['React', 'Amazon EMR', 'Kepler.gl']}
              />
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
