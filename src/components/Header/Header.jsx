import { useState, useEffect } from "react";
import { HStack, Box, Container, IconButton, Show, useDisclosure } from "@chakra-ui/react";
import { FaBars, FaXmark } from "react-icons/fa6";
import NavLink from "./NavLink";

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { open, onToggle, onClose } = useDisclosure();

  useEffect(() => {
    const watchWindowWidth = () => {
      setWindowWidth(window.innerWidth);
      onClose();
    }
    window.addEventListener("resize", watchWindowWidth);
    return () => window.removeEventListener("resize", watchWindowWidth);
  }, [])

  return (
    <HStack
      as="header"
      pos="fixed"
      zIndex="1"
      w="full"
      shadow="sm"
      backgroundColor="bg.panel"
      minH="16"
    >
      <Container
        w={{md: "11/12"}}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <IconButton
          size="2xl"
          variant="plain"
          mr="-4"
          zIndex="2"
          onClick={onToggle}
          hideFrom="md"
        >
          {open ? <FaXmark /> : <FaBars />}
        </IconButton>
        <Show
          when={open || windowWidth >= 768}
        >
          <Box
            as="nav"
            pos={{base: "fixed", md: "static"}}
            top="0"
            left="0"
            zIndex="1"
            w={{base: "100vw", md: "auto"}}
            h={{base: "100vh", md: "auto"}}
            display="flex"
            flexDir={{base: "column", md: "row"}}
            alignItems="center"
            justifyContent="center"
            gapX="12"
            gapY="4"
            backgroundColor="bg.panel"
            mr="-5"
          >
            <NavLink>work</NavLink>
            <NavLink>about</NavLink>
            <NavLink>contact</NavLink>
          </Box>
        </Show>
      </Container>
    </HStack>
  )
}