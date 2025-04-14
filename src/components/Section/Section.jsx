import { Box, Container, Stack } from "@chakra-ui/react";

export default function Section({children}) {
  return (
    <Box as="section" border="2px red">
      <Container w={{md: "11/12"}}>
        {children}
      </Container>
    </Box>
  )
}