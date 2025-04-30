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
					<VStack gap={12}>
						<Text
							color={"fg.muted"}
							textAlign={"center"}
							maxW={"2xl"}
							mb={8}
						>
							All my projects include links to the code and live version. Click the button to learn more about each one.
						</Text>
						<Project
							title="quizz app"
							description="Quizzical is a simple quiz app that lets you select alternatives and then gives you a score. It's built with functional React components."
							imgUrl="https://images.unsplash.com/photo-1745761412274-5303bc3f2e45"
							techStack={["React JS", "Tailwind CSS", "MongoDB"]}
						/>
						<Project
							title="personal dashboard"
							description="A Chrome Extension that gives you an overview over the current time, how the weather is like and how Dogecoin is performing. Interacts with multiple APIs using async JS."
							imgUrl="https://images.unsplash.com/photo-1744924452863-63bae92c7395"
							techStack={["Next JS", "Firebase Realtime Database", "Bootstrap"]}
						/>
						<Project
							title="password generator"
							description="An app that generates random passwords based on a few user inputs, e.g. length, types of characters, etc. Built with HTML, CSS, and vanilla JavaScript."
							imgUrl="https://images.unsplash.com/photo-1745572601167-720dc57db0d8"
							techStack={["React JS", "Django", "MySQL"]}
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