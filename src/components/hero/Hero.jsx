import { Container, Heading, Highlight, VStack, Text, Button } from "@chakra-ui/react"

export default function Hero() {
	return (
		<Container
			minH={"100vh"}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
			borderWidth={"thick"}
		>
			<VStack
				gap={{base: "5vh"}}
				textAlign={"center"}
				borderWidth={"thick"}
			>
				<Heading
					size={{base: "3xl", md: "4xl", lg: "5xl"}}
					fontWeight={"bold"}
				>
					Hey, my name is Bastien Winant
				</Heading>
				<Text fontSize="md" color="fg.muted" lineHeight={"tall"}>
					<Highlight
						ignoreCase
						query={["react js", "tailwind css"]}
						styles={{ color: "teal.600", fontWeight: "semibold" }}
					>
						I am a passionate frontend developer based in London, UK.
						My specialities are React JS and Tailwind CSS, and I love building apps that are delightful to use.
					</Highlight>
				</Text>
				<Button size={"xl"} mt={2}>See my projects</Button>
			</VStack>
		</Container>
	)
}
