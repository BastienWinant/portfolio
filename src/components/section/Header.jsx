import { Center, Box } from "@chakra-ui/react";

export default function Header({children}) {
	return (
			<Center as="header">
				{children}
				<Box borderWidth="medium" w="16" />
			</Center>
	)
}