import './App.css'
import Header from './components/Header/Header'
import Section from './components/Section/index'
import Project from './components/Project/Project'
import AnchorLink from './components/AnchorLink/AnchorLink'
import Button from './components/Button/Button'
import { useNav } from './providers/NavContext'
import profileImg from './assets/images/profile.png'

function App() {
  const {heroRef, workRef, aboutRef, contactRef} = useNav()

  return (
    <div className='app--container'>
      <Header />
      <main>
        <section className='hero' ref={heroRef}>
          <div className='hero--container'>
            <h1>Bastien Winant</h1>
            <p>Full-stack developer based in Luxembourg</p>
            <AnchorLink ref={contactRef}>
              <div className='hero--cta-btn'>Get in touch</div>
            </AnchorLink>
          </div>
        </section>
        <Section ref={workRef}>
          <Section.Header>my work</Section.Header>
          <Section.Body>
            <div className='projects'>
              <Project
                imgUrl='https://images.unsplash.com/photo-1741145018917-216c9275bc3a'
                name='personal dashboard'
                description='A Chrome extension to help you focus and stay up-to-date.'
                techstack={['HTML', 'CSS', 'JavaScript', 'React']}
              />
              <Project
                imgUrl='https://images.unsplash.com/photo-1742783201678-33840ee6ee0b'
                name='password generator'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                eius.'
                techstack={['React', 'NextJS', 'Node', 'MongoDB']}
              />
              <Project
                imgUrl='https://images.unsplash.com/photo-1742412615574-ce65e63598d8'
                name='quizzical app'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                eius.'
                techstack={['React', 'Amazon EMR', 'Kepler.gl']}
              />
            </div>
          </Section.Body>
        </Section>
        <Section ref={aboutRef}>
          <Section.Header>about me</Section.Header>
          <Section.Body>
            <figure className='profile'>
              <img src={profileImg} alt='Black and white headshot' className='profile--img' />
              <figcaption className='profile--caption'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequuntur asperiores sapiente iusto dolorum vero nulla atque quibusdam. Voluptatum eaque a praesentium architecto tenetur, quasi ullam similique incidunt? Molestiae, quis?
                <Button>My Resume</Button>
              </figcaption>
            </figure>
          </Section.Body>
        </Section>
        <Section ref={contactRef}>
          <Section.Header>get in touch</Section.Header>
          <Section.Body>
            <Button>bastien.winant@gmail.com</Button>
          </Section.Body>
        </Section>
      </main>
    </div>
  )
}

export default App
