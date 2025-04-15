import { Button, Card, Image, Wrap, Badge, Box, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { nanoid } from "nanoid";

export default function Project(props) {
  const {name, description, imgUrl, techStack} = props;

  return (
    <Card.Root flexDir={{base: "column", md: "row"}} overflow="hidden">
      <Image
        objectFit="cover"
        src={imgUrl}
        alt="Project screenshot"
        w={{md: "1/2"}}
        aspectRatio={2 / 1}
      />
      <Box>
        <Card.Body gap="3">
          <Card.Title textTransform="capitalize" fontSize={{base: "xl", md: "2xl"}}>{name}</Card.Title>
          <Card.Description fontSize={{base: "md", md: "lg"}}>{description}</Card.Description>
          <Wrap mt="4">
            {techStack.map(tech => <Badge key={nanoid()}>{tech}</Badge>)}
          </Wrap>
        </Card.Body>
        <Card.Footer gap="2">
          <LinkBox>
            <Badge size="lg" px="4" py="2.5" variant="solid">Buy now</Badge>
            <LinkOverlay href="https://github.com/BastienWinant" target="_blank" />
          </LinkBox>
          <LinkBox>
            <Badge size="lg" px="4" py="2.5" variant="plain">Add to cart</Badge>
            <LinkOverlay href="https://github.com/BastienWinant" target="_blank" />
          </LinkBox>
        </Card.Footer>
      </Box>
    </Card.Root>
  )
}