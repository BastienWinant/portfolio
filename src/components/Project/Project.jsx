import './index.css'
import ArrowIcon from './img/16-arrow-right.svg'
import GithubIcon from './img/16-logo-github.svg'

export default function Project() {
  const techstack = ['HTML', 'CSS', 'JavaScript', 'React']

  return (
    <article className="project-card">
      <img src="https://images.unsplash.com/photo-1742096202703-8bdd9b98fe30" alt="Project screenshot." className="project-card--img" />
      <div className="project-card--body">
        <h3 className="project-card--title">personal dashboard</h3>
        <p className="project-card--description">A Chrome extension to help you focus and stay up-to-date.</p>
        <ul className="project-card--techstack">
          {techstack.map(tech => <li>{tech}</li>)}
        </ul>
        <div className="project-card--links">
          <a href="#" className="project-card--demo-link">
            <div className="slider"></div>
            <span>Visit Site</span>
            <img src={ArrowIcon} alt="Right arrow icon." />
          </a>
          <a href="#" className="project-card--github-link">
            <img src={GithubIcon} alt="Githib icon." />
          </a>
        </div>
      </div>
    </article>
  )
}