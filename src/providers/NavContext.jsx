import { createContext, useContext, useRef } from "react"

const NavContext = createContext(undefined)

export const NavProvider = ({children}) => {
  const heroRef = useRef(null)
  const workRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <NavContext.Provider value={{heroRef, workRef, aboutRef, contactRef}}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext)