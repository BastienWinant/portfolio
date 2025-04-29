import {
	Container,
	Stack,
	HStack,
	Avatar,
	Text,
	Button,
	IconButton,
	StackSeparator,
	Show,
	useDisclosure
} from "@chakra-ui/react"
import { LuAlignJustify } from "react-icons/lu"
import profileImg from "./img/profile.png"

export default function Header() {
	const { open, onToggle } = useDisclosure()

	return (
		<Container
			borderWidth={"thin"}
		>
			<HStack
				justifyContent={"space-between"}
			>
				{/*Clickable avatar*/}
				<Button
					size={"xl"}
					px={0}
					variant={"outline"}
				>
					<Avatar.Root size={"xl"}>
						<Avatar.Fallback name="Armand Winant" />
						<Avatar.Image src={profileImg} />
					</Avatar.Root>
					<Text fontWeight={"semibold"}>Bastien</Text>
				</Button>

				{/*Nav toggle button*/}
				<IconButton
					size={"xl"}
					aria-label="Toggle navigation"
					hideFrom="md"
					variant={"outline"}
					mr={-4}
					onClick={onToggle}
				>
					<LuAlignJustify />
				</IconButton>
			</HStack>
			<Show when={open}>
				<Stack separator={<StackSeparator />}>
					<Button variant={"outline"}>projects</Button>
					<Button variant={"outline"}>contact</Button>
				</Stack>
			</Show>
		</Container>
	)
}