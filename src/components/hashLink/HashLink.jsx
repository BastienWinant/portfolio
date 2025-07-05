import { Button } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router";

export default function HashLink(props) {
	const location = useLocation();
	const navigate = useNavigate();

	const { ref } = props;

	function scrollToRef() {
		if (location.pathname !== "/") {
			navigate("/")
		}

		ref.current.scrollIntoView();
	}

	return (
			<Button onClick={scrollToRef}>NavLink</Button>
	)
}