import { createContext, useContext, useRef } from "react";

const NavContext = createContext(undefined);

export const NavProvider = ({ children }) => {
	const homeRef = useRef(null)
	const projectsRef = useRef(null);
	const aboutRef = useRef(null);
	const contactRef = useRef(null);

	return (
			<NavContext.Provider
					value={{
						homeRef, projectsRef, aboutRef, contactRef
					}}
			>
				{children}
			</NavContext.Provider>
	);
};

export const useNav = () => useContext(NavContext);