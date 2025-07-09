import { Button, Card, Image, Wrap, Box, Badge } from "@chakra-ui/react"

export default function Projects() {
	return (
			<Card.Root maxW="sm" overflow="hidden">
				<Image
						src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
						alt="Green double couch with wooden legs"
				/>
				<Box>
					<Card.Body gap="2">
						<Card.Title>Living room Sofa</Card.Title>
						<Card.Description>
							This sofa is perfect for modern tropical spaces, baroque inspired
							spaces.
						</Card.Description>
						<Wrap mt="4">
							<Badge>Hot</Badge>
							<Badge>Caffeine</Badge>
						</Wrap>
					</Card.Body>
					<Card.Footer>
						<Button>Buy Latte</Button>
					</Card.Footer>
				</Box>
			</Card.Root>
	)
}