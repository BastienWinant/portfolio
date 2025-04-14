import { Heading, Stack, Text, Button } from "@chakra-ui/react"

export default function Hero() {
  return (
    <Stack
      minH="100vh"
      justify="center"
      gap="6"
      textAlign={{base: "center", md: "left"}}
    >
      <Heading size={{base: "4xl", md: "5xl", lg: "6xl"}} letterSpacing="tight">
        Jane Smith
      </Heading>
      <Text fontSize="lg" color="fg.muted">
        Front-end developer based in London, UK
      </Text>
      <Button
        size="xl"
        alignSelf={{base: "center", md: "flex-start"}}
      >Get in touch</Button>
    </Stack>
  )
}