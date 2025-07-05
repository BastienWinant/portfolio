import { Button } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router";

export default function HashLink() {
	const location = useLocation();
	let navigate = useNavigate();

	function scrollToRef() {
		if (location.pathname !== "/") {
			navigate("/")
		}
	}

	return (
			<Button onClick={scrollToRef}>NavLink</Button>
	)
}