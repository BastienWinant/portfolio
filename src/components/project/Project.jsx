import { Card, Image, Flex, Wrap, Badge, LinkBox, LinkOverlay} from "@chakra-ui/react"
import {Link} from "react-router"
import {nanoid} from "nanoid"

export default function Project(props) {
	const {title, description, imgUrl, techStack} = props;

	return (
		<Card.Root flexDirection={{base: "column", md: "row"}} overflow="hidden" variant={"elevated"}>
			<Image
				objectFit="cover"
				w={{md: "1/2", lg: "2/5"}}
				aspectRatio={{ base: 16 / 9, md: 2 / 1 }}
				src={imgUrl}
				alt="Green double couch with wooden legs"
			/>
			<Flex direction={"column"} justifyContent={"center"}>
				<Card.Body flexGrow={0}>
					<Card.Title mb="2" textTransform={"capitalize"}>{title}</Card.Title>
					<Card.Description>
						{description}
					</Card.Description>
					<Wrap mt="4">
						{techStack.map(tech => <Badge key={nanoid()}>{tech}</Badge>)}
					</Wrap>
				</Card.Body>
				<Card.Footer>
					<LinkBox>
						<Badge size="lg" variant={"solid"} fontWeight={"semibold"}>Learn More</Badge>
						<LinkOverlay asChild>
							<Link to="/" />
						</LinkOverlay>
					</LinkBox>
				</Card.Footer>
			</Flex>
		</Card.Root>
	)
}