import { Flex, Box, Heading, Text, HStack, LinkBox, LinkOverlay, Icon } from "@chakra-ui/react";
import { FaXing, FaGithub, FaTwitter } from "react-icons/fa6";

export default function Footer() {
	return (
			<Flex
					as="footer"
					direction={{base: "column-reverse", md: "row"}}
					align={{base: "flex-start", md: "center"}}
					justify="space-between"
					gap="12"
					px={{base: "4", md: "6", lg: "8"}}
			>
				<Box borderWidth="thin" maxW="xl">
					<Heading>BASTIEN WINANT</Heading>
					<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit facilis tempora explicabo quae quod deserunt</Text>
				</Box>
				<Box borderWidth="thin">
					<Heading>SOCIAL</Heading>
					<HStack gap="4">
						<LinkBox>
							<Icon size="lg"><FaXing /></Icon>
							<LinkOverlay href="https://www.xing.com"  target="_blank"/>
						</LinkBox>
						<LinkBox>
							<Icon size="lg"><FaGithub /></Icon>
							<LinkOverlay href="https://www.github.com"  target="_blank"/>
						</LinkBox>
						<LinkBox>
							<Icon size="lg"><FaTwitter /></Icon>
							<LinkOverlay href="https://www.x.com"  target="_blank"/>
						</LinkBox>
					</HStack>
				</Box>
			</Flex>
	)
}