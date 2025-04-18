import { Center, HStack, LinkBox, LinkOverlay, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn, FaXing } from "react-icons/fa6";

export default function Footer() {
  return (
    <Center
      as="footer"
      display="flex"
      align="center"
      justify="center"
      borderWidth="medium"
      minH="20"
    >
      <HStack gap="12">
        <LinkBox>
          <Icon size="2xl">
            <FaGithub />
          </Icon>
          <LinkOverlay href="https://github.com/BastienWinant" target="_blank" />
        </LinkBox>
        <LinkBox>
          <Icon size="2xl">
            <FaLinkedinIn />
          </Icon>
          <LinkOverlay href="https://linkedin.com/in/winant" target="_blank" />
        </LinkBox>
        <LinkBox>
          <Icon size="2xl">
            <FaXing />
          </Icon>
          <LinkOverlay href="https://linkedin.com/in/winant" target="_blank" />
        </LinkBox>
      </HStack>
    </Center>
  )
}