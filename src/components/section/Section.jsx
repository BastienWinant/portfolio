import { Box, Container } from '@chakra-ui/react'

export default function Section({children}) {
	return (
		<Box as={"section"} borderWidth={"thick"}>
			<Container>
				{children}
			</Container>
		</Box>
	)
}