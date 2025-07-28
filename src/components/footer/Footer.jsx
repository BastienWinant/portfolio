import { FaSquareGithub, FaSquareXing } from "react-icons/fa6";
import "./Footer.css"

export default function Footer() {
	return (
			<footer className="footer">
				<nav className="footer__nav">
					<a href="#" target="_blank" className="footer__nav-link">
						<FaSquareGithub />
					</a>
					<a href="#" target="_blank" className="footer__nav-link">
						<FaSquareXing />
					</a>
				</nav>
			</footer>
	)
}