import { VStack, Heading, Box } from "@chakra-ui/react";
export default function Header({children}) {
	return (
		<VStack as={"header"} borderWidth={"thin"} gap={"6"}>
			<Heading
				as={"h2"}
				size={{base: "3xl"}}
				textTransform={"uppercase"}
				fontWeight={"bold"}
			>{children}</Heading>
			<Box w={12} borderWidth={"medium"} borderRadius={"sm"}></Box>
		</VStack>
	)
}