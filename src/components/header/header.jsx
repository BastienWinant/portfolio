import { Stack, HStack, Avatar, Text, Link as ChakraLink } from "@chakra-ui/react"
import { NavLink } from "react-router"
import avatarImg from '@/assets/img/profile.png'

export default function Header() {
	return (
			<Stack as="header" borderWidth="4px">
				<HStack gap="4" border="3px solid red">
					<Avatar.Root>
						<Avatar.Fallback name="Bastien Winant" />
						<Avatar.Image src={avatarImg} />
					</Avatar.Root>
					<Stack>
						<Text fontWeight="medium">Bastien Winant</Text>
					</Stack>
				</HStack>
				<Stack as="nav">
					<Link asChild>
						<Li href="/">Home</Li>
					</Link>
				</Stack>
			</Stack>
	)
}