import { Container, Stack } from "@chakra-ui/react";

export default function Section({children}) {
  return (
    <Container borderWidth="thick">
      <Stack>
        {children}
      </Stack>
    </Container>
  )
}