import { Box, HStack, Avatar, Stack, Text } from "@chakra-ui/react"
import avatarImg from '@/assets/img/profile.png'

export default function Header() {
	return (
			<Box borderWidth="4px">
				<HStack gap="4" border="3px solid red">
					<Avatar.Root>
						<Avatar.Fallback name="Bastien Winant" />
						<Avatar.Image src={avatarImg} />
					</Avatar.Root>
					<Stack>
						<Text fontWeight="medium">Bastien Winant</Text>
					</Stack>
				</HStack>
			</Box>
	)
}