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
      </main>
    </div>
  )
}

export default App
