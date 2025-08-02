import AnimatedLink from "@/components/animatedLink/AnimatedLink.jsx";
import { nanoid } from "nanoid";
import "./ProjectCard.css"
import { FaGithub } from "react-icons/fa6";
import arrowImg from "@/assets/img/12-arrow-right.svg"

export default function ProjectCard({imgUrl, title, description, techStack, githubLink, demoLink}) {
	return (
		<figure className="project">
			<img src={imgUrl} className="project__img" alt="Screenshot" />
			<figcaption className="project__caption">
				<h3 className="project__title">{title}</h3>
				<div className="project__body">
					<p className="project__description">{description}</p>
					<ul className="project__techstack">
						{techStack.map(tech => <li key={nanoid()}>{tech}</li>)}
					</ul>
				</div>
				<footer className="project__footer">
					<AnimatedLink
						href={demoLink}
						className="project__demo_link"
						target="_blank"
					>
						<span className="project__demo_link__text">
							Visit Site
							<img src={arrowImg} alt="Right arrow image." />
						</span>
					</AnimatedLink>
					<a
						href={githubLink}
						target="_blank"
						className="project__github_link"
					>
						<FaGithub />
					</a>
				</footer>
			</figcaption>
		</figure>
	)
}