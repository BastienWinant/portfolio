import { Container, Flex, Stack, Heading, IconButton, Text } from "@chakra-ui/react"

export default function Footer() {
	return (
		<Container as={"footer"} borderWidth={"thick"}>
			<Flex
				direction={{base: "column", md: "row-reverse"}}
				justify={"space-between"}
			>
				<Stack gap={4}>
					<Heading as={"h2"}>Social</Heading>
				</Stack>
				<Stack gap={4}>
					<Heading as={"h2"}>Bastien Winant</Heading>
					<Text maxW={"lg"}>Lorem ipsum dolor sit amet consectetur adipisicing elit facilis
						tempora explicabo quae quod deserunt</Text>
				</Stack>
			</Flex>
		</Container>
	)
}