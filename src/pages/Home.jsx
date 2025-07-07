import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router";
import { useEffect } from "react";
import Landing from "@/components/landing/Landing.jsx";
import Section from "@/components/section/Section.jsx";

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
				<Section id="projects">Projects</Section>
				<Section id="about">About</Section>
				<Section id="contact">Contact</Section>
			</Box>
	)
}