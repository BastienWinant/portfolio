import { Button, Card, Image, Text, Box, Wrap, Badge } from "@chakra-ui/react"
import { nanoid } from "nanoid";

export default function Project(props) {
  const {name, description, imgUrl, techStack} = props;

  return (
    <Card.Root flexDir={{base: "column", md: "row"}} overflow="hidden">
      <Image
        src={imgUrl}
        alt="Green double couch with wooden legs"
        w={{md: "1/2"}}
        aspectRatio={2 / 1}
      />
      <Box>
        <Card.Body gap="2">
          <Card.Title textTransform="capitalize">{name}</Card.Title>
          <Card.Description>
            {description}
          </Card.Description>
          <Wrap mt="4">
            {techStack.map(tech => <Badge key={nanoid()}>{tech}</Badge>)}
          </Wrap>
        </Card.Body>
        <Card.Footer gap="2">
          <Button variant="solid">Buy now</Button>
          <Button variant="ghost">Add to cart</Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  )
}