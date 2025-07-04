import { Box, Stack, Link } from "@chakra-ui/react";
import HashLink from "@/components/hashLink/HashLink.jsx";

export default function Header() {
	return (
			<Box
					position="fixed"
					top="0"
					w="100vw"
					border="2px solid blue"
			>
				<Stack direction={{base: "column", md: "row"}} gap="0">
					<HashLink />
					<HashLink />
					<HashLink />
				</Stack>
			</Box>
	)
}