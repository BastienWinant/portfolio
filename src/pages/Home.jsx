import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router";
import { useEffect} from "react";

export default function Home() {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const element = document.querySelector(location.hash);
			if (element) {
				// Smooth scroll to the element
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [location]);

	return (
			<Box as="main" border="2px solid orange">
				<Box as="section" id="home" borderWidth="medium" h="100vh">
					section 1
				</Box>
				<Box as="section" id="projects" borderWidth="medium" h="100vh">
					section 2
				</Box>
				<Box as="section" id="about" borderWidth="medium" h="100vh">
					section 3
				</Box>
				<Box as="section" id="contact" borderWidth="medium" h="100vh">
					section 3
				</Box>
			</Box>
	)
}