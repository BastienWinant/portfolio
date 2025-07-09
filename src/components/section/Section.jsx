import { VStack } from "@chakra-ui/react";

export default function Section({children, ...props}) {
	return (
			<VStack
					as="section"
					{...props}
					scrollMarginTop="10"
					minH="100vh"
					px={{base: "4", md: "6", lg: "8"}}
					py="24"
			>
				{children}
			</VStack>
	)
}