import { Center, Box } from "@chakra-ui/react";

export default function Body({children}) {
	return (
			<Box w="100%" border="2px solid red;">{children}</Box>
	)
}