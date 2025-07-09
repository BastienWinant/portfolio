import { VStack, Box, Heading, Text } from "@chakra-ui/react";

export default function Header(props) {
	const {title, tagline} = props;

	return (
			<VStack as="header" gap="4" w="100%" textAlign="center" lineHeight="tall">
				<Heading as="h2" size={{base: "xl", md: "2xl"}} textTransform="uppercase" fontWeight="bold">{title}</Heading>
				<Box borderWidth="medium" rounded="sm" w="8" />
				{tagline && <Text w="11/12" maxW="2xl" color="fg.muted">{tagline}</Text>}
			</VStack>
	)
}