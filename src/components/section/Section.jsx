import { VStack } from "@chakra-ui/react";

export default function Section({children, ...props}) {
	return (
			<VStack
					as="section"
					{...props}
					scrollMarginTop="20"
					borderWidth="medium"
					minH="100vh"
			>
				{children}
			</VStack>
	)
}