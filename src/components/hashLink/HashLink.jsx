import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";

export default function HashLink(props) {
	const navigate = useNavigate();
	const { path, ref } = props;

	function scrollToRef() {
		navigate(path);
		// TODO: scroll into view of the ref
	}

	return (
			<Button onClick={scrollToRef}>NavLink</Button>
	)
}