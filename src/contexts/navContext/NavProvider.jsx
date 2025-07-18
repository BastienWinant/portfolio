import {NavContext} from "./NavContext.js";
import {useRef} from "react";

export default function NavProvider({children}) {
	const homeRef = useRef(null);
	const workRef = useRef(null);
	const aboutRef = useRef(null);
	const contactRef = useRef(null);

	return (
		<NavContext.Provider value={{homeRef, workRef, aboutRef, contactRef}}>
			{children}
		</NavContext.Provider>
	)
}