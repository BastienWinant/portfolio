import './App.css'
import Header from './components/Header/Header'
import CTAButton from './components/CTAButton/CTAButton'

function App() {
  return (
    <div className='app-container'>
      <Header />
      <main>
        <section className='hero'>
          <div className='hero--inner'>
            <hgroup>
              <h1>Bastien Winant</h1>
              <p className='tagline'>Front-end developer based in Luxembourg</p>
            </hgroup>
            <CTAButton text="Get in touch" />
          </div>
        </section>
        <section className='work'>
          <header className="section--header">
            <h2 className="section--title">
              <span className='section--title-text'>my work</span>
            </h2>
          </header>
        </section>
      </main>
    </div>
  )
}

export default App
