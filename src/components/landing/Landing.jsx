import {
	Flex,
	Heading,
	Highlight,
	VStack,
	Text,
	Button,
	StackSeparator,
	LinkBox,
	LinkOverlay,
	Icon
} from "@chakra-ui/react";
import { FaGithub, FaXing } from "react-icons/fa6";

export default function Landing() {
	return (
			<Flex
					id="home"
					as="section"
					h="100vh"
					position="relative"
					align="center"
					justify="center"
			>
				<VStack gap="8" textAlign="center">
					<Heading
							size={{base: "3xl", md: "3xl", lg: "4xl"}}
							letterSpacing="wide"
							lineHeight="tall"
							textTransform="uppercase"
							fontWeight="extrabold">
						hey, my name is bastien winant
					</Heading>
					<Text fontSize="md" color="fg.muted" lineHeight="tall" maxW={{md: "4/5", lg: "2/3"}}>
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
				<VStack
						position="absolute"
						left="0"
						borderWidth="thin"
						hideBelow="md"
						separator={<StackSeparator />}
						gap="0"
				>
					<LinkBox p="4">
						<Icon size={{base: "xl", lg: "2xl"}}>
							<FaGithub />
						</Icon>
						<LinkOverlay href="https://www.github.com/BastienWinant" target="_blank" />
					</LinkBox>
					<LinkBox p="4">
						<Icon size={{base: "xl", lg: "2xl"}}>
							<FaXing />
						</Icon>
						<LinkOverlay href="https://www.xing.com/profile/Bastien_Winant" target="_blank" />
					</LinkBox>
				</VStack>
			</Flex>
	)
}