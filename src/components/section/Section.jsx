import { Box } from "@chakra-ui/react";

export default function Section({children, ...props}) {
	return (
			<Box as="section" {...props} scrollMarginTop="20" borderWidth="medium" h="100vh">
				{children}
			</Box>
	)
}