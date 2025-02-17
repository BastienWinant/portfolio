import './index.css'
import closeIcon from './img/e-remove.svg'
import menuBurgerIcon from './img/menu-8.svg'
import { useState, useEffect } from 'react'

export default function Header() {
  const [navExpanded, setNavExpanded] = useState(false)
  const [wideWindow, setWideWindow] = useState(window.innerWidth >= 768)
    
  useEffect(() => {
    function watchWindowWidth () {
      setNavExpanded(false)
      setWideWindow(window.innerWidth >= 768)
    }
    window.addEventListener("resize", watchWindowWidth)
    return () => window.removeEventListener("resize", watchWindowWidth)
  }, [])

  function toggleNav() {
    setNavExpanded(prevVal => !prevVal)
  }

  return (
    <header className='header'>
      {
        (navExpanded || wideWindow) ?
        <nav className="nav">
          <button type="button" className='nav--collapse-btn' onClick={toggleNav}>
            <img src={closeIcon} alt="Close icon." className="nav--btn-img" />
          </button>
          <ul className="nav-links">
            <li><a href="#" className="nav-link">Work</a></li>
            <li><a href="#" className="nav-link">About</a></li>
            <li><a href="#" className="nav-link">Blog</a></li>
            <li><a href="#" className="nav-link">Contact</a></li>
          </ul>
        </nav>
        :
        <button type="button" className="nav--expand-btn" onClick={toggleNav}>
          <img src={menuBurgerIcon} alt="Hamburger menu icon." className="nav--btn-img" />
        </button>
      }
    </header>
  )
}