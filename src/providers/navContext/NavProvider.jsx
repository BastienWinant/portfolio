import { useRef } from "react";
import NavContext from "./NavContext";

export const NavProvider = ({ children }) => {
	const homeRef = useRef(null);
	const projectsRef = useRef(null);
	const aboutRef = useRef(null);
	const contactRef = useRef(null);

	return (
			<NavContext.Provider
					value={{
						homeRef, projectsRef, aboutRef, contactRef,
					}}
			>
				{children}
			</NavContext.Provider>
	);
};