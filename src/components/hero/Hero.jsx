import {
	Container,
	Heading,
	Highlight,
	VStack,
	Text,
	LinkBox,
	LinkOverlay,
	Badge,
	StackSeparator,
	IconButton
} from "@chakra-ui/react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router"
import {FaLinkedin} from "react-icons/fa";

export default function Hero() {
	return (
		<Container
			minH={"100vh"}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
			pos={"relative"}
		>
			<VStack gap={8} textAlign={"center"} w={"11/12"} maxW={{base: "lg", md: "xl", lg: "3xl"}}>
				<Heading size={{base: "3xl", md: "4xl", lg: "5xl"}} letterSpacing="tight">
					Hey, my name is Bastien Winant
				</Heading>
				<Text fontSize={{base: "md", md: "lg"}} color="fg.muted" lineHeight={"tall"}>
					<Highlight
						ignoreCase
						query={["react js", "tailwind css"]}
						styles={{ color: "teal.600", fontWeight: "semibold" }}
					>
						I am a passionate frontend developer based in Luxembourg. My specialities are React JS and Tailwind CSS,
						and I love building apps that are delightful to use.
					</Highlight>
				</Text>
				<LinkBox>
					<Badge size={"lg"} py={3} px={6}>
						<Text textStyle={"md"} textTransform={"uppercase"} fontWeight={"semibold"}>see my projects</Text>
					</Badge>
					<LinkOverlay asChild>
						<Link to="/" />
					</LinkOverlay>
				</LinkBox>
			</VStack>
			<VStack
				pos={"absolute"}
				left={0}
				separator={<StackSeparator />}
				gap={0}
				borderWidth={"thin"}
				hideBelow={"md"}
			>
				<LinkBox>
					<IconButton size={"2xl"} variant={"plain"}>
						<FaGithub />
					</IconButton>
					<LinkOverlay href={"https://github.com/BastienWinant"} target="_blank" />
				</LinkBox>
				<LinkBox>
					<IconButton size={"2xl"} variant={"plain"}>
						<FaLinkedin />
					</IconButton>
					<LinkOverlay href={"https://linkedin.com/in/winant"} target={"_blank"} />
				</LinkBox>
			</VStack>
		</Container>
	)
}
