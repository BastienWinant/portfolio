import { Button, Card, Image, Wrap, Flex, Badge } from "@chakra-ui/react"

export default function Projects({imgUrl, title, description, techStack}) {
	return (
			<Card.Root
					flexDirection={{base: "column", md: "row"}}
					overflow="hidden"
					w="100%"
					variant="elevated"
					size="lg"
			>
				<Image
						src={imgUrl}
						alt="Green double couch with wooden legs"
						aspectRatio="2 / 1"
						width={{md: "2/5"}}
				/>
				<Flex direction="column" justify="center" flexGrow="1">
					<Card.Body gap="2" flexGrow="0">
						<Card.Title>{title}</Card.Title>
						<Card.Description>{description}</Card.Description>
						<Wrap mt="4">
							{techStack.map(tech => <Badge key={tech} size="md">{tech}</Badge>)}
						</Wrap>
					</Card.Body>
					<Card.Footer>
						<Button>Learn more</Button>
					</Card.Footer>
				</Flex>
			</Card.Root>
	)
}