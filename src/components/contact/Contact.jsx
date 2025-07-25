import AnimatedLink from "@/components/animatedLink/AnimatedLink.jsx";
import "./Contact.css";

export default function Contact() {
	return (
			<div className="contact">
				<p className="contact__text">
					Are you looking for a fast-performing and user-friendly website to represent your product or business?
					or looking for any kind of consultation? or want to ask questions?
					or have some advice for me or just want to say "Hi 👋"in any case feel free to Let me know.
					I will do my best to respond back. 😊 The quickest way to reach out to me is via an email.
				</p>
				<AnimatedLink
					href="mailto:bastien.winant@gmail.com"
					className="email-link"
				>
					bastien.winant@gmail.com
				</AnimatedLink>
			</div>
	)
}