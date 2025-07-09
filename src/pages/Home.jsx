import { Box, VStack } from "@chakra-ui/react";
import { useLocation } from "react-router";
import { useEffect } from "react";
import Landing from "@/components/landing/Landing.jsx";
import Section from "@/components/section/index.jsx";
import Project from "@/components/project/Project.jsx";

export default function Home() {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const element = document.querySelector(location.hash);
			if (element) {
				// Smooth scroll to the element
				element.scrollIntoView({ behavior: "smooth" });
			}
		} else {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth",
			});
		}
	}, [location]);

	return (
			<Box as="main">
				<Landing />
				<Section id="projects">
					<Section.Header
							title="projects"
							tagline="All my projects include links to the code and live version.
												Click the button to learn more about each one."
					/>
					<Section.Body>
						<VStack>
							<Project />
						</VStack>
					</Section.Body>
				</Section>
				<Section id="about">
					<Section.Header
							title="about"
							tagline="I'm a frontend developer based out of London, UK. I love building apps that solve
												real-world problems, and that are delightful to use. My specialities include TypeScript,
												React JS, Tailwind CSS, and Styled Components."
					/>
					<Section.Body>this is the body of the about section</Section.Body>
				</Section>
				<Section id="contact">
					<Section.Header
							title="contact"
							tagline="Please reach out if you have any questions! I'm happy to jump on a video call to brainstorm
												projects and ideas. Send me an email at jane@example.com or call me directly at +123456789"
					/>
					<Section.Body>this is the body of the contact section</Section.Body>
				</Section>
			</Box>
	)
}