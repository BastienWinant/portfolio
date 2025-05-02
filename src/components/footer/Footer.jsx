import {
	Container,
	Flex,
	Stack,
	Heading,
	Text,
	HStack,
	IconButton,
	LinkBox,
	LinkOverlay
} from "@chakra-ui/react"
import { FaGithub, FaLinkedinIn, FaXing, FaStackOverflow } from "react-icons/fa6"

export default function Footer() {
	return (
		<Container as={"footer"}>
			<Flex
				direction={{base: "column", md: "row-reverse"}}
				justify={"space-between"}
				gapY={12}
				py={16}
			>
				<Stack gap={4}>
					<Heading as={"h2"}>Social</Heading>
					<HStack gap={0} mx={-4}>
						<LinkBox>
							<IconButton variant={"plain"} size={"xl"}>
								<FaGithub />
							</IconButton>
							<LinkOverlay href={"https://github.com/BastienWinant"} target={"_blank"} />
						</LinkBox>
						<LinkBox>
							<IconButton variant={"plain"} size={"xl"}>
								<FaLinkedinIn />
							</IconButton>
							<LinkOverlay href={"https://linkedin.com/in/winant"} target={"_blank"} />
						</LinkBox>
						<LinkBox>
							<IconButton variant={"plain"} size={"xl"}>
								<FaXing />
							</IconButton>
							<LinkOverlay href={"https://xing.com"} target={"_blank"} />
						</LinkBox>
						<LinkBox>
							<IconButton variant={"plain"} size={"xl"}>
								<FaStackOverflow />
							</IconButton>
							<LinkOverlay href={"https://stackoverflow.com"} target={"_blank"} />
						</LinkBox>
					</HStack>
				</Stack>
				<Stack gap={4}>
					<Heading as={"h2"}>Bastien Winant</Heading>
					<Text textStyle="sm" lineHeight={"tall"} maxW={"lg"}>Lorem ipsum dolor sit amet consectetur adipisicing elit facilis
						tempora explicabo quae quod deserunt</Text>
				</Stack>
			</Flex>
		</Container>
	)
}