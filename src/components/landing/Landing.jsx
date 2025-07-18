import AnchorLink from "../anchorLink/AnchorLink.jsx";
import "./Landing.css";

export default function Landing() {
	return (
		<section className="landing">
			<div>
				<h1>Bastien Winant</h1>
				<p>Full-Stack Developer based in Luxembourg</p>
				<AnchorLink>Get in touch</AnchorLink>
			</div>
		</section>
	)
}