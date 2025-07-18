import { useState, useEffect } from "react";
import AnchorLink from "../anchorLink/AnchorLink.jsx";
import { FaBars, FaX } from "react-icons/fa6";
import "./Header.css"

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

	function toggleNav() {
		setNavExpanded(prevVal => !prevVal);
	}

	return (
		<header className="header">
			{(windowWidth < 768 && !navExpanded) &&
					<button className="nav-expand-btn" onClick={toggleNav}>
						<FaBars />
				</button>}
			{(windowWidth >= 768 || navExpanded) &&
				<nav>
					{(windowWidth < 768) && <button className="nav-collapse-btn" onClick={toggleNav}>
						<FaX />
					</button>}
					<ul className="nav-links">
						<li>
							<AnchorLink>
								work
							</AnchorLink>
						</li>
						<li>
							<AnchorLink>
								about
							</AnchorLink>
						</li>
						<li>
							<AnchorLink>
								contact
							</AnchorLink>
						</li>
					</ul>
				</nav>}
		</header>
	)
}