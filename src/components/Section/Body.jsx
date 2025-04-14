import { Box } from "@chakra-ui/react"

export default function Body({children}) {
  return (
    <Box borderWidth="thin">{children}</Box>
  )
}