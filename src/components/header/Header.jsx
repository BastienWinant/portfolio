import { Stack, HStack, Avatar, Text, StackSeparator, Button } from "@chakra-ui/react"
import avatarImg from '@/assets/img/profile.png'

export default function Header() {
	return (
			<Stack
					as="header"
					direction={{ base: "column", md: "row" }}
					justifyContent={{md: "space-between" }}
					borderWidth="4px"
			>
				<HStack gap="4" border="3px solid red">
					<Avatar.Root>
						<Avatar.Fallback name="Bastien Winant" />
						<Avatar.Image src={avatarImg} />
					</Avatar.Root>
					<Stack>
						<Text fontWeight="medium">Bastien Winant</Text>
					</Stack>
				</HStack>
				<Stack
						as="nav"
						direction={{ base: "column", md: "row" }}
						alignItems={{ md: "center" }}
						separator={<StackSeparator hideFrom="md" />}
						gapX="8"
						gapY="2"
				>
					<Button px="2" variant="outline">Home</Button>
					<Button px="2" variant="outline">Projects</Button>
					<Button px="2" variant="outline">About</Button>
					<Button px="2" variant="outline">Contact</Button>
				</Stack>
			</Stack>
	)
}