import { Button } from "@chakra-ui/react"

export default function NavLink({children}) {
  return (
    <Button
      size="xl"
      variant="plain"
      fontWeight="semibold"
    >
      {children}
    </Button>
  )
}