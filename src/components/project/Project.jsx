import { Button, Card, Image, Wrap, Badge } from "@chakra-ui/react"

export default function Project() {
	return (
			<Card.Root maxW="sm" overflow="hidden" border="2px solid orange;">
				<Image
						src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
						alt="Green double couch with wooden legs"
				/>
				<Card.Body gap="2" borderWidth="thin">
					<Card.Title>Personal Dashboard</Card.Title>
					<Card.Description>
						A Chrome extension to help you focus and stay up-to-date.
					</Card.Description>
					<Wrap mt="4">
						<Badge>HTML</Badge>
						<Badge>CSS</Badge>
						<Badge>JavaScript</Badge>
						<Badge>React</Badge>
					</Wrap>
				</Card.Body>
				<Card.Footer>
					<Button>Learn More</Button>
				</Card.Footer>
			</Card.Root>
	)
}