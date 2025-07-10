import { Flex, Box } from "@chakra-ui/react";

export default function Footer() {
	return (
			<Flex
					as="footer"
					direction={{base: "column-reverse", md: "row"}}
					align={{base: "flex-start", md: "center"}}
					justify="space-between"
			>
				<Box>this is the text box</Box>
				<Box>social media links</Box>
			</Flex>
	)
}