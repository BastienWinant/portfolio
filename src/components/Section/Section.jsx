import { Box, Container, Stack } from "@chakra-ui/react";

export default function Section({children}) {
  return (
    <Box as="section" py={{base: "20", md: "24"}} borderWidth="thin">
      <Container w={{md: "11/12"}}>
        <Stack gap="16">
          {children}
        </Stack>
      </Container>
    </Box>
  )
}