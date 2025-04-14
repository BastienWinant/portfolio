import { Box } from "@chakra-ui/react"

export default function Body({children}) {
  return (
    <Box border="2px solid red">{children}</Box>
  )
}