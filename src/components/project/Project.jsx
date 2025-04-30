import { Card, Image, Flex, Wrap, Badge, LinkBox, LinkOverlay} from "@chakra-ui/react"
import {Link} from "react-router"
import {nanoid} from "nanoid"

export default function Project(props) {
	const {title, description, imgUrl, techStack} = props;

	return (
		<Card.Root flexDirection={{base: "column", md: "row"}} overflow="hidden">
			<Image
				objectFit="cover"
				w={{md: "2/5"}}
				aspectRatio={{ base: 4 / 3, md: 2 / 1 }}
				src={imgUrl}
				alt="Green double couch with wooden legs"
			/>
			<Flex direction={"column"} justifyContent={"center"} border={"2px solid red"}>
				<Card.Body borderWidth={"medium"} flexGrow={0}>
					<Card.Title mb="2" textTransform={"capitalize"}>{title}</Card.Title>
					<Card.Description>
						{description}
					</Card.Description>
					<Wrap mt="4">
						{techStack.map(tech => <Badge key={nanoid()}>{tech}</Badge>)}
					</Wrap>
				</Card.Body>
				<Card.Footer borderWidth={"medium"}>
					<LinkBox>
						<Badge size="lg" variant={"solid"}>learn more</Badge>
						<LinkOverlay asChild>
							<Link to="/" />
						</LinkOverlay>
					</LinkBox>
				</Card.Footer>
			</Flex>
		</Card.Root>
	)
}