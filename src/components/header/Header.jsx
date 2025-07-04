import { Stack, HStack, Avatar, Text, StackSeparator, Button } from "@chakra-ui/react"
import avatarImg from '@/assets/img/profile.png'

export default function Header() {
	return (
			<Stack
					as="header"
					py="2"
					pb={{base: 0, md: 2}}
					direction={{ base: "column", md: "row" }}
					justifyContent={{base: "flex-center", md: "space-between" }}
					gap="0"
					borderWidth="1px"
			>
				<HStack gap="4">
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
						gap="0"
						gapX={{md: "8", lg: "10"}}
						separator={<StackSeparator hideFrom="md" />}
				>
					<Button
							variant="ghost"
							display="flex"
							justifyContent={{base: "flex-end", md: "center"}}
							px={{base: 0, md: 1}}
							py={{base: "6", md: "4"}}
							borderRadius="0"
					>
						<Text
								textTransform="uppercase"
								textStyle="xs"
								fontWeight="bold"
						>home</Text>
					</Button>
					<Button
							variant="ghost"
							display="flex"
							justifyContent={{base: "flex-end", md: "center"}}
							px={{base: 0, md: 1}}
							py={{base: "6", md: "4"}}
							borderRadius="0"
					>
						<Text
								textTransform="uppercase"
								textStyle="xs"
								fontWeight="bold"
						>projects</Text>
					</Button>
					<Button
							variant="ghost"
							display="flex"
							justifyContent={{base: "flex-end", md: "center"}}
							px={{base: 0, md: 1}}
							py={{base: "6", md: "4"}}
							borderRadius="0"
					>
						<Text
								textTransform="uppercase"
								textStyle="xs"
								fontWeight="bold"
						>about</Text>
					</Button>
					<Button
							variant="ghost"
							display="flex"
							justifyContent={{base: "flex-end", md: "center"}}
							px={{base: 0, md: 1}}
							py={{base: "6", md: "4"}}
							borderRadius="0"
					>
						<Text
								textTransform="uppercase"
								textStyle="xs"
								fontWeight="bold"
						>contact</Text>
					</Button>
				</Stack>
			</Stack>
	)
}