import { useState, useEffect } from "react";
import AnchorLink from "../anchorLink/AnchorLink.jsx";
import { FaBars, FaX } from "react-icons/fa6";
import {useNav} from "../../contexts/navContext/NavContext.js";
import "./Header.css"

export default function Header() {
	const [navExpanded, setNavExpanded] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const { workRef, aboutRef, contactRef} = useNav();

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
							<AnchorLink targetRef={workRef} callBack={toggleNav} className="nav-link">
								work
							</AnchorLink>
						</li>
						<li>
							<AnchorLink targetRef={aboutRef} callBack={toggleNav} className="nav-link">
								about
							</AnchorLink>
						</li>
						<li>
							<AnchorLink targetRef={contactRef} callBack={toggleNav} className="nav-link">
								contact
							</AnchorLink>
						</li>
					</ul>
				</nav>}
		</header>
	)
}