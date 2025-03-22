import './index.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header--container">
        <nav className="nav">
          <ul className="nav-links">
            <li><a href="#" className="nav-link">work</a></li>
            <li><a href="#" className="nav-link">about</a></li>
            <li><a href="#" className="nav-link">contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}