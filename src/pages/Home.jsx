import { Box } from "@chakra-ui/react";

export default function Home() {
	return (
			<Box as="main" border="2px solid orange">
				<Box as="section" id="projects" borderWidth="medium" h="100vh">
					section 1
				</Box>
				<Box as="section" id="about" borderWidth="medium" h="100vh">
					section 2
				</Box>
				<Box as="section" id="contact" borderWidth="medium" h="100vh">
					section 3
				</Box>
			</Box>
	)
}