import { useState, useEffect } from 'react'
import './index.css'
import hamburgerIcon from './img/12-menu-8.svg'
import closeIcon from './img/12-e-remove.svg'
import { useNav } from '../../providers/NavContext'

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [expanded, setExpanded] = useState(false)

  const {heroRef, workRef, aboutRef, contactRef} = useNav()

  useEffect(() => {
    const handleResize = () => {
      setExpanded(false)
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function toggleNav() {
    setExpanded(prevVal => !prevVal)
  }

  function scrollToSection(scrollTarget) {
    setExpanded(false)
    scrollTarget.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="header">
      <div className="header--container">
        <button type="button" className="header--nav-toggle-btn" onClick={toggleNav}>
          <img src={expanded ? closeIcon : hamburgerIcon} alt="Nav hamburger icon." />
        </button>
        {(expanded || windowWidth >= 768) && <nav className="nav">
          <ul className="nav-links">
            <li><button type="button" className="nav-link" onClick={() => scrollToSection(workRef)}>work</button></li>
            <li><button type="button" className="nav-link" onClick={() => scrollToSection(aboutRef)}>about</button></li>
            <li><button type="button" className="nav-link" onClick={() => scrollToSection(contactRef)}>contact</button></li>
          </ul>
        </nav>}
      </div>
    </header>
  )
}