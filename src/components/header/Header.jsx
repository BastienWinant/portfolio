import { useState, useEffect } from "react";

export default function Header() {
	const [navExpanded, setNavExpanded] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		function trackWindowWidth() {
			setNavExpanded(false);
			setWindowWidth(window.innerWidth);
		}

		window.addEventListener("resize", trackWindowWidth);
		return () => window.removeEventListener("resize", trackWindowWidth);
	}, []);

	return (
		<header>
			{(windowWidth >= 768 || navExpanded) &&
				<nav>
					<ul>
						<li>work</li>
						<li>about</li>
						<li>contact</li>
					</ul>
				</nav>}
		</header>
	)
}