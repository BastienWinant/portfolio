import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router";
import { useEffect } from "react";
import Landing from "@/components/landing/Landing.jsx";
import Section from "@/components/section/index.jsx";

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
					<Section.Header>projects</Section.Header>
					<Section.Body>this is the body of the projects section</Section.Body>
				</Section>
				<Section id="about">
					<Section.Header>about</Section.Header>
					<Section.Body>this is the body of the about section</Section.Body>
				</Section>
				<Section id="contact">
					<Section.Header>contact</Section.Header>
					<Section.Body>this is the body of the contact section</Section.Body>
				</Section>
			</Box>
	)
}