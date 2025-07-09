import { Button, Card, Image, Wrap, Flex, Badge } from "@chakra-ui/react"

export default function Projects() {
	return (
			<Card.Root flexDirection={{base: "column", md: "row"}} overflow="hidden" w="100%">
				<Image
						src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
						alt="Green double couch with wooden legs"
						aspectRatio="2 / 1"
						width={{md: "2/5"}}
				/>
				<Flex direction="column" justify="center" flexGrow="1">
					<Card.Body gap="2" flexGrow="0">
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
				</Flex>
			</Card.Root>
	)
}