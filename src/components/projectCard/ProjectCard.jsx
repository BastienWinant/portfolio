import {nanoid} from "nanoid";
import "./ProjectCard.css"
import { FaGithub } from "react-icons/fa6";
import arrowImg from "@/assets/img/20-arrow-right.svg"

export default function ProjectCard({imgUrl, title, description, techStack, githubLink, demoLink}) {
	return (
		<figure className="project">
			<img className="project__img" src={imgUrl} alt="Project screenshot." />
			<figcaption className="project__caption">
				<header className="project__header">
					<h3 className="project__title">{title}</h3>
				</header>
				<section>
					<p className="project__description">{description}</p>
					<ul className="project__techstack">
						{techStack.map(tech => <li key={nanoid()} className="project__tech">{tech}</li>)}
					</ul>
				</section>
				<footer className="project__footer">
					<div className="project__demo_link__container">
						<a className="project__demo_link" href={demoLink} target="_blank">
							Visit Site
							<img src={arrowImg} alt="Right arrow image." />
						</a>
						<div className="project__demo_link__overlay"></div>
					</div>
					<a className="project__github_link" href={githubLink} target="_blank"><FaGithub /></a>
				</footer>
			</figcaption>
		</figure>
	)
}