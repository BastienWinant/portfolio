import { Button, Card, Image, HStack, Badge } from "@chakra-ui/react"

export default function Project() {
	return (
			<Card.Root maxW="sm" overflow="hidden" border="2px solid orange;">
				<Image
						src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
						alt="Green double couch with wooden legs"
				/>
				<Card.Body gap="2">
					<Card.Title>Living room Sofa</Card.Title>
					<Card.Description>
						This sofa is perfect for modern tropical spaces, baroque inspired
						spaces.
					</Card.Description>
					<HStack mt="4">
						<Badge>Hot</Badge>
						<Badge>Caffeine</Badge>
					</HStack>
				</Card.Body>
				<Card.Footer>
					<Button>Buy Latte</Button>
				</Card.Footer>
			</Card.Root>
	)
}