import { Container, Stack } from '@chakra-ui/react'

export default function Section({children, ...props}) {
	return (
		<Container
			as="section"
			py={{base: 16, md: 20, lg: 24}}
			{...props}
		>
			<Stack gap={{base: 12, md: 16 }}>
				{children}
			</Stack>
		</Container>
	)
}