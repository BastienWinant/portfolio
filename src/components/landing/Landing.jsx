import AnchorLink from "../anchorLink/AnchorLink.jsx";
import {useNav} from "@/contexts/navContext/NavContext.js";
import "./Landing.css";

export default function Landing(props) {
	const {contactRef} = useNav();

	return (
		<section className="landing" {...props}>
			<div className="landing__text-box">
				<h1>Bastien Winant</h1>
				<p>Full-Stack Developer based in Luxembourg</p>
				<AnchorLink targetRef={contactRef} className="cta-btn">Get in touch</AnchorLink>
			</div>
		</section>
	)
}