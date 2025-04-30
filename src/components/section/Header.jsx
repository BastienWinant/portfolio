import { VStack, Heading, Box } from "@chakra-ui/react";
export default function Header({children}) {
	return (
		<VStack as={"header"} borderWidth={"thin"} gap={{base: 4, md: 6}}>
			<Heading
				as={"h2"}
				size={{base: "2xl", md: "3xl"}}
				textTransform={"uppercase"}
				fontWeight={"bold"}
			>{children}</Heading>
			<Box w={12} borderWidth={"medium"} borderRadius={"sm"}></Box>
		</VStack>
	)
}