import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router";
import { useEffect } from "react";
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
			<Box as="main" border="2px solid orange">
				<Section id="home">section 1</Section>
				<Section id="projects">section 2</Section>
				<Section id="about">section 3</Section>
				<Section id="contact">section 4</Section>
			</Box>
	)
}