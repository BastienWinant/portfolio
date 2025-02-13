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
        <img src={menuBurgerIcon} className='nav--btn-img' alt="Menu burger icon." />
      </button>
      {navExpanded && <nav className="nav" display={navExpanded}>
        <button type="button" onClick={toggleNav} className='nav--collapse-btn'>
          <img src={closeIcon} className="nav--btn-img" alt="Close icon." />
        </button>
        <ul className="nav--links">
          <li><a href="#" className="nav--link">work</a></li>
          <li><a href="#" className="nav--link">about</a></li>
          <li><a href="#" className="nav--link">blog</a></li>
          <li><a href="#" className="nav--link">contact</a></li>
        </ul>
      </nav>}
    </header>
  )
}