import AnimatedLink from "@/components/animatedLink/AnimatedLink.jsx";
import profileImg from "@/assets/img/IMG_0145.JPG"
import "./About.css"

export default function About() {
	return (
			<figure className="about__figure">
				<img src={profileImg} className="about__img" alt="Profile photo." />
				<figcaption className="about__caption">
					<p>
						I'm a web developer and designer based out of London, UK.
						I love building apps that solve real-world problems, and that are delightful to use.
						My specialities include TypeScript, React JS, Tailwind CSS, and Styled Components.
					</p>
					<p>
						My background is in teaching and marketing, and I have a bachelors degree in English from Kings College.
						I also have five adorable cats.
					</p>
					<AnimatedLink
							href="#"
							className="resume-link"
							target="_blank"
					>
						my resume
					</AnimatedLink>
				</figcaption>
			</figure>
	)
}