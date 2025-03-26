import './App.css'
import Header from './components/Header/Header'
import Section from './components/Section/index'
import Project from './components/Project/Project'
import AnchorLink from './components/AnchorLink/AnchorLink'
import Button from './components/Button/Button'
import { useNav } from './providers/NavContext'
import ProfileImg from './assets/images/profile.png'
import LinkedinIcon from './assets/images/16-logo-linkedin.svg'
import GithubIcon from './assets/images/16-logo-github.svg'

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
              <img src={ProfileImg} alt='Black and white headshot' className='profile--img' />
              <figcaption className='profile--caption'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae eaque iure quibusdam! Vero suscipit, similique accusamus deleniti aut provident labore ea nisi facilis, ipsum qui. Dolores sunt voluptatum molestias nesciunt.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, voluptates! Soluta sed ipsam fugiat neque, repellat eveniet aspernatur alias reiciendis rem? Dolore perferendis cumque sed doloremque distinctio veritatis deserunt numquam?</p>
                <Button>My Resume</Button>
              </figcaption>
            </figure>
          </Section.Body>
        </Section>
        <Section ref={contactRef}>
          <Section.Header>get in touch</Section.Header>
          <Section.Body>
            <div className="contact">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sequi debitis earum, accusantium ex, maiores quidem autem asperiores at cum ipsa libero exercitationem! Repellat corrupti veritatis enim magni cupiditate velit.</p>
              <Button>bastien.winant@gmail.com</Button>
            </div>
          </Section.Body>
        </Section>
      </main>
      <footer className="footer">
        <a href="https://github.com/BastienWinant" target="_blank" className="footer--github-link">
          <img src={GithubIcon} alt="" />
        </a>
        <a href="https://linkedin.com/in/winant" target="_blank" className="footer--linkedin-link">
          <img src={LinkedinIcon} alt="Linkedin logo." />
        </a>
      </footer>
    </div>
  )
}

export default App
