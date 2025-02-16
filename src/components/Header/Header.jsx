import './index.css'
import closeIcon from './img/e-remove.svg'
import menuBurgerIcon from './img/menu-8.svg'
import { useState } from 'react'

export default function Header() {
  const [navExpanded, setNavExpanded] = useState(false)

  function toggleNav() {
    setNavExpanded(prevVal => !prevVal)
  }

  return (
    <header className='header'>
      <button type="button" onClick={toggleNav}>
        <img src={menuBurgerIcon} alt="" className="nav--btn-img" />
      </button>
      {navExpanded && <nav className="nav">
        <button type="button" className='nav--collapse-btn' onClick={toggleNav}>
          <img src={closeIcon} alt="" className="nav--btn-img" />
        </button>
        <ul className="nav-links">
          <li><a href="#" className="nav-link">Work</a></li>
          <li><a href="#" className="nav-link">About</a></li>
          <li><a href="#" className="nav-link">Blog</a></li>
          <li><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </nav>}
    </header>
  )
}