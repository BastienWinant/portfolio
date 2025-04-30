import { Box } from  '@chakra-ui/react'
import Hero from '@/components/hero/Hero.jsx'
import Section from '@/components/section/index.jsx'

export default function Main() {
	return (
		<Box
			as="main"
		>
			<Hero />
			<Section>
				<Section.Header>
					projects
				</Section.Header>
				<Section.Body>
					this is the body of the projects section
				</Section.Body>
			</Section>
			<Section>
				<Section.Header>
					about me
				</Section.Header>
				<Section.Body>
					this is the body of the about me section
				</Section.Body>
			</Section>
			<Section>
				<Section.Header>
					contact me
				</Section.Header>
				<Section.Body>
					this is the body of the contact section
				</Section.Body>
			</Section>
		</Box>
	)
}