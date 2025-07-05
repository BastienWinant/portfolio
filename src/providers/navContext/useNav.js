import { useContext } from "react";
import NavContext from "./NavContext";

export const useNav = () => useContext(NavContext);