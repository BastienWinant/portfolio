import { Heading, Stack, Text, Button } from "@chakra-ui/react"

export default function Hero() {
  return (
    <Stack
      minH="100vh"
      justify="center"
      align={{base: "center", md: "flex-start"}}
      gap="6"
      textAlign={{base: "center", md: "left"}}
    >
      <Heading size={{base: "4xl", md: "5xl", lg: "6xl"}} letterSpacing="tight">
        Bastien Winant
      </Heading>
      <Text fontSize="lg" color="fg.muted" maxW={{base: "2/3"}}>
        Front-end developer based in Luxembourg
      </Text>
      <Button
        size="xl"
        alignSelf={{base: "center", md: "flex-start"}}
      >Get in touch</Button>
    </Stack>
  )
}