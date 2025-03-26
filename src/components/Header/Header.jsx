import { useState, useEffect } from 'react'
import './index.css'
import hamburgerIcon from './img/12-menu-8.svg'
import closeIcon from './img/12-e-remove.svg'
import { useNav } from '../../providers/NavContext'
import AnchorLink from '../AnchorLink/AnchorLink'

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [expanded, setExpanded] = useState(false)

  const { workRef, aboutRef, contactRef } = useNav()

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
            <li>
              <AnchorLink ref={workRef} callback={() => setExpanded(false)}>
                <div className="nav-link">work</div>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink ref={aboutRef} callback={() => setExpanded(false)}>
                <div className="nav-link">about</div>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink ref={contactRef} callback={() => setExpanded(false)}>
                <div className="nav-link">contact</div>
              </AnchorLink>
            </li>
          </ul>
        </nav>}
      </div>
    </header>
  )
}