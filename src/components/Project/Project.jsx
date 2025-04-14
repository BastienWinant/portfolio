import { Button, Card, Image, Box, Wrap, Badge, LinkBox, LinkOverlay } from "@chakra-ui/react"
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
          <LinkBox>
            <Badge variant="solid" size="lg" px="4" py="2">Live site</Badge>
            <LinkOverlay href="https://github.com/BastienWinant" target="_blank" />
          </LinkBox>
          <LinkBox>
            <Badge variant="ghost" size="lg" px="4" py="2">Code</Badge>
            <LinkOverlay href="https://github.com/BastienWinant" target="_blank" />
          </LinkBox>
        </Card.Footer>
      </Box>
    </Card.Root>
  )
}