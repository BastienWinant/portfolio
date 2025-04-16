import { Container, Heading, Text, Button } from "@chakra-ui/react"
import AnchorButton from "@/components/AnchorButton/AnchorButton"
import { useNav } from "@/providers/NavContext"

export default function Hero() {
  const {contactRef} = useNav();

  return (
    <Container
      w={{md: "11/12"}}
      minH="100vh"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems={{base: "center", md: "flex-start"}}
      gapY="6"
      textAlign={{base: "center", md: "left"}}
    >
      <Heading
        size={{base: "4xl", md: "5xl", lg: "6xl"}}
      >Bastien Winant</Heading>
      <Text fontSize="lg" color="fg.muted" maxW={{base: "2/3"}}>Front-end developer based in Luxembourg</Text>
      <AnchorButton
        ref={contactRef}
        size="xl"
        alignSelf={{base: "center", md: "flex-start"}}
      >Get in touch</AnchorButton>
    </Container>
  )
}