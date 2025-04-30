import { Box, VStack, Text } from  '@chakra-ui/react'
import Hero from '@/components/hero/Hero.jsx'
import Section from '@/components/section/index.jsx'
import Project from "@/components/project/Project.jsx"

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
					<VStack>
						<Text color={"fg.muted"} textAlign={"center"} maxW={"2xl"}>
							All my projects include links to the code and live version. Click the button to learn more about each one.
						</Text>
						<Project
							title="quizz app"
							description="Quizzical is a simple quiz app that lets you select alternatives and then gives you a score. It's built with functional React components."
							imgUrl="https://images.unsplash.com/photo-1745761412274-5303bc3f2e45"
							techStack={["React JS", "Tailwind CSS", "MongoDB"]}
						/>
					</VStack>
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