import { Box, HStack, Avatar, Stack, Text } from "@chakra-ui/react"

export default function Header() {
	return (
			<Box borderWidth="4px">
				<HStack gap="4">
					<Avatar.Root size="xl">
						<Avatar.Fallback name="Bastien Winant" />
						<Avatar.Image src="https://images.unsplash.com/photo-1745177717290-9ce463cdc5e1" />
					</Avatar.Root>
					<Stack gap="0">
						<Text fontWeight="medium">Bastien Winant</Text>
					</Stack>
				</HStack>
			</Box>
	)
}