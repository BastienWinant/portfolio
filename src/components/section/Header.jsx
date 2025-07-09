import { VStack, Box, Heading } from "@chakra-ui/react";

export default function Header({children}) {
	return (
			<VStack as="header" gap="4" w="100%">
				<Heading as="h2" size="2xl" textTransform="uppercase" fontWeight="bold">{children}</Heading>
				<Box borderWidth="medium" rounded="sm" w="8" />
			</VStack>
	)
}