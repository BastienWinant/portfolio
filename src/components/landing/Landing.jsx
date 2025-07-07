import { Center, Heading, Highlight, VStack, Text, Button } from "@chakra-ui/react";

export default function Landing() {
	return (
			<Center
					id="home"
					as="section"
					h="100vh"
					px="2"
			>
				<VStack gap="4vh" textAlign="center">
					<Heading
							size={{base: "3xl", md: "3xl", lg: "4xl"}}
							letterSpacing="wide"
							lineHeight="tall"
							textTransform="uppercase"
							fontWeight="extrabold">
						hey, my name is bastien winant
					</Heading>
					<Text fontSize="md" color="fg.muted" lineHeight="tall">
						<Highlight query={["react js", "tailwind css"]} styles={{ fontWeight: "semibold" }} ignoreCase>
							I am a passionate front-end developer based in London, UK. My specialties are React JS
							and Tailwind CSS, and I love building apps that are delightful to use.
						</Highlight>
					</Text>
					<Button
							mt="2"
							size="lg"
							textTransform="uppercase"
							fontWeight="semibold">
						see my projects
					</Button>
				</VStack>
			</Center>
	)
}