import { useState , useEffect } from "react"
import {
	Container,
	Stack,
	HStack,
	Avatar,
	Text,
	IconButton,
	StackSeparator,
	Show,
	LinkBox,
	LinkOverlay,
	useDisclosure
} from "@chakra-ui/react"
import { NavLink } from "react-router"
import { FaBars, FaXmark } from "react-icons/fa6"
import profileImg from "./img/profile.png"

export default function Header() {
	const { open, onToggle, onClose } = useDisclosure()
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const trackWindowWidth = () => {
			setWindowWidth(window.innerWidth)
			onClose()
		}
		window.addEventListener("resize", trackWindowWidth)
		return () => window.removeEventListener("resize", trackWindowWidth)
	}, [])

	const showVal = open || (windowWidth >= 768)

	return (
		<Container
			position={"sticky"}
			display={"flex"}
			flexDir={{base: "column", md: "row"}}
			alignItems={{md: "center"}}
			justifyContent={{md: "space-between"}}
			borderWidth={"thin"}
			minH={16}
		>
			<HStack
				justifyContent={"space-between"}
				overflowX={"hidden"}
			>
				{/*Clickable avatar*/}
				<LinkBox>
					<HStack gap={3}>
						<Avatar.Root size="xl">
							<Avatar.Fallback name="Bastien Winant" />
							<Avatar.Image src={profileImg} />
						</Avatar.Root>
						<Text fontWeight={"semibold"} fontSize={"lg"}>Bastien</Text>
					</HStack>
					<LinkOverlay asChild>
						<NavLink to="/" />
					</LinkOverlay>
				</LinkBox>

				{/*Nav toggle button*/}
				<IconButton
					size={"2xl"}
					aria-label="Toggle navigation"
					hideFrom="md"
					mr={-5}
					variant={"plain"}
					onClick={onToggle}
				>
					{open ? <FaXmark /> : <FaBars />}
				</IconButton>
			</HStack>
			<Show when={showVal}>
				<Stack
					direction={{base: "column", md: "row"}}
					gap={{base: 0, md: 6}}
					separator={<StackSeparator/>}
				>
					<LinkBox p={{base: 4, md: 0}}>
						<Text textAlign={{base: "right", md: "center"}}>projects</Text>
						<LinkOverlay asChild>
							<NavLink to="/" />
						</LinkOverlay>
					</LinkBox>
					<LinkBox p={{base: 4, md: 0}}>
						<Text textAlign={{base: "right", md: "center"}}>about</Text>
						<LinkOverlay asChild>
							<NavLink to="/" />
						</LinkOverlay>
					</LinkBox>
					<LinkBox p={{base: 4, md: 0}}>
						<Text textAlign={{base: "right", md: "center"}}>contact</Text>
						<LinkOverlay asChild>
							<NavLink to="/" />
						</LinkOverlay>
					</LinkBox>
				</Stack>
			</Show>
		</Container>
	)
}