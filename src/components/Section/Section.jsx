import { Box, Container, Stack } from "@chakra-ui/react";

export default function Section({children}) {
  return (
    <Box as="section" borderWidth="medium">
      <Container w={{md: "11/12"}}>
        <Stack gap="12">
          {children}
        </Stack>
      </Container>
    </Box>
  )
}