import {
	Box,
	Text,
	Stack,
	VStack,
	Heading,
	Wrap,
	Badge,
	Button,
	SimpleGrid,
	Center
} from '@chakra-ui/react'
import Hero from '@/components/hero/Hero.jsx'
import Section from '@/components/section/index.jsx'
import Project from "@/components/project/Project.jsx"

export default function Main() {
	return (
		<Box as="main">
			<Hero />
			<Section id="projects">
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
			<Section id="about">
				<Section.Header>
					about me
				</Section.Header>
				<Section.Body>
					<VStack gap={20}>
						<Text textAlign={"center"} maxW={"3xl"}>
							I'm a frontend developer based out of London, UK. I love building apps that solve real-world problems, and that are delightful to use. My specialities include TypeScript, React JS, Tailwind CSS, and Styled Components.
						</Text>
						<SimpleGrid
							columns={{base: 1, md: 2}}
							gap={16}
						>
							<Stack gap={8}>
								<Heading as={"h3"}>Get to know me!</Heading>
								<Text maxW={"2xl"}>My background is in teaching and marketing. I have a bachelors degree in English from Kings College. When I'm not coding, I take care of my five adorable cats.</Text>
								<Button alignSelf={"flex-start"}>contact</Button>
							</Stack>
							<Stack gap={8}>
								<Heading as={"h3"}>My skills</Heading>
								<Wrap gap={3}>
									<Badge variabt={"subtle"} size={"lg"} px={6} py={3} fontWeight={"semibold"}>HTML</Badge>
									<Badge variabt={"subtle"} size={"lg"} px={6} py={3} fontWeight={"semibold"}>CSS</Badge>
									<Badge variabt={"subtle"} size={"lg"} px={6} py={3} fontWeight={"semibold"}>JavaScript</Badge>
									<Badge variabt={"subtle"} size={"lg"} px={6} py={3} fontWeight={"semibold"}>React</Badge>
									<Badge variabt={"subtle"} size={"lg"} px={6} py={3} fontWeight={"semibold"}>TypeScript</Badge>
									<Badge variabt={"subtle"} size={"lg"} px={6} py={3} fontWeight={"semibold"}>Git</Badge>
									<Badge variabt={"subtle"} size={"lg"} px={6} py={3} fontWeight={"semibold"}>Tailwind CSS</Badge>
									<Badge variabt={"subtle"} size={"lg"} px={6} py={3} fontWeight={"semibold"}>Jasmine</Badge>
								</Wrap>
							</Stack>
						</SimpleGrid>
					</VStack>
				</Section.Body>
			</Section>
			<Section id="contact">
				<Section.Header>contact me</Section.Header>
				<Section.Body>
					<Center>
						<Text textAlign={"center"} maxW={"2xl"}>Please reach out if you have any questions! I'm happy to jump on a video call to brainstorm projects and ideas. Send me an email at jane@example.com or call me directly at +123456789</Text>
					</Center>
				</Section.Body>
			</Section>
		</Box>
	)
}