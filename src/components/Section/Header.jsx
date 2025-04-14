import { Stack, Heading, Box } from "@chakra-ui/react"

export default function Header({children}) {
  return (
    <Stack as="header" gap="3.5">
      <Heading
        size={{base: "3xl", md: "4xl"}}
        fontWeight="medium"
        textTransform="capitalize"
      >
        {children}
      </Heading>
      <Box w="20" />
    </Stack>
  )
}