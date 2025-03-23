import { useState, useEffect } from 'react'
import './index.css'
import hamburgerIcon from './img/12-menu-8.svg'
import closeIcon from './img/12-e-remove.svg'

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [expanded, setExpanded] = useState(false)

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

  return (
    <header className="header">
      <div className="header--container">
        <button type="button" className="header--nav-toggle-btn" onClick={toggleNav}>
          <img src={expanded ? closeIcon : hamburgerIcon} alt="Nav hamburger icon." />
        </button>
        {(expanded || windowWidth >= 768) && <nav className="nav">
          <ul className="nav-links">
            <li><a href="#" className="nav-link">work</a></li>
            <li><a href="#" className="nav-link">about</a></li>
            <li><a href="#" className="nav-link">contact</a></li>
          </ul>
        </nav>}
      </div>
    </header>
  )
}