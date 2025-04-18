import { Box, Button, Card, Image, Text } from "@chakra-ui/react"

export default function About() {
  return (
    <Card.Root flexDirection={{base: "column", md: "row"}} overflow="hidden">
      <Image
        objectFit="cover"
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />
      <Box>
        <Card.Body>
          <Text>
            I'm a web developer and designer based out of London, UK. I love building apps that solve real-world problems, and that are delightful to use. My specialities include TypeScript, React JS, Tailwind CSS, and Styled Components.
          </Text>
          <Text>
            My background is in teaching and marketing, and I have a bachelors degree in English from Kings College. I also have five adorable cats.
          </Text>
        </Card.Body>
        <Card.Footer>
          <Button>Buy Latte</Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  )
}