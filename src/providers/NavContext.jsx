import { createContext, useContext, useRef} from "react";

const NavContext = createContext(null);

export function NavProvider({children}) {
  const homeRef = useRef(null);
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return <NavContext.Provider value={{homeRef, workRef, aboutRef, contactRef}}>{children}</NavContext.Provider>
}

export const useNav = () => useContext(NavContext);