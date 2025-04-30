import {Container, Heading, Highlight, VStack, Text, LinkBox, LinkOverlay, Badge} from "@chakra-ui/react"
import { Link } from "react-router"

export default function Hero() {
	return (
		<Container
			minH={"100vh"}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
		>
			<VStack gap={8} textAlign={"center"}>
				<Heading size="3xl" letterSpacing="tight">
					<Highlight query="with speed" styles={{ color: "teal.600" }}>
						Create accessible React apps with speed
					</Highlight>
				</Heading>
				<Text fontSize={{base: "md", md: "lg"}} color="fg.muted">
					<Highlight
						ignoreCase
						query={["simple", "accessible"]}
						styles={{ color: "teal.600", fontWeight: "semibold" }}
					>
						Chakra UI is a simple, modular and accessible component library that
						gives you the building blocks you need.
					</Highlight>
				</Text>
				<LinkBox>
					<Badge size={"2xl"} px={4} py={2}>
						see my projects
					</Badge>
					<LinkOverlay asChild>
						<Link to="/" />
					</LinkOverlay>
				</LinkBox>
			</VStack>
		</Container>
	)
}
