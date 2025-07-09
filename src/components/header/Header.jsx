import { useState, useEffect } from "react";
import {
	Flex,
	Stack,
	Avatar,
	Text,
	LinkBox,
	LinkOverlay,
	StackSeparator,
	Button,
	IconButton,
	Show
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router";
import { FaBars, FaX } from "react-icons/fa6";
import profileImg from "@/assets/img/profile.png";

export default function Header() {
	const navigate = useNavigate();
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
		function watchWindowWidth() {
			setExpanded(false);
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener("resize", watchWindowWidth);
		setExpanded(window.innerWidth >= 768)
		return () => window.removeEventListener("resize", watchWindowWidth);
	}, []);

	function toggleNav() {
		setExpanded(prevExpanded => !prevExpanded);
	}

	function navigateTo(hash) {
		console.log(windowWidth)
		setExpanded(windowWidth >= 768);

		navigate({
			pathname: "/",
			hash: hash
		})
	}

	return (
			<Flex
					position="fixed"
					zIndex="1"
					top="0"
					w="100vw"
					direction={{base: "column", md: "row"}}
					align={{base: "stretch", md: "center"}}
					justify={{base: "flex-start", md: "space-between"}}
					px={{base: "4", md: "6", lg: "8"}}
					py={{base: "3", md: "4"}}
					shadow="md"
					bg="bg.subtle"
			>
				<Flex flexGrow="1" justify="space-between" align="center">
					<LinkBox display="flex" alignItems="center" gap="3">
						<Avatar.Root>
							<Avatar.Fallback name="Bastien Winant" />
							<Avatar.Image src={profileImg} />
						</Avatar.Root>
						<LinkOverlay asChild>
							<Link to="/"><Text fontWeight="medium">Bastien Winant</Text></Link>
						</LinkOverlay>
					</LinkBox>
					<IconButton
							aria-label="Toggle nav"
							hideFrom="md"
							size="xl"
							mr="-3.5"
							variant="plain"
							onClick={toggleNav}
					>
						{expanded ? <FaX /> : <FaBars />}
					</IconButton>
				</Flex>
				<Show when={expanded || windowWidth >= 768}>
					<Stack
							direction={{base: "column", md: "row"}}
							gap="0"
							gapX="4"
							separator={<StackSeparator hideFrom="md" />}
							mb={{base: -3, md: 0}}
							mr="-3.5"
					>
						<Button
								variant="ghost"
								display="flex"
								justifyContent="flex-end"
								size="md"
								py={{base: 6, md: 0}}
								textTransform="uppercase"
								fontWeight="semibold"
								onClick={() => navigateTo("")}
								aria-label="Go to home page"
						>home</Button>
						<Button
								variant="ghost"
								display="flex"
								justifyContent="flex-end"
								size="md"
								py={{base: 6, md: 0}}
								textTransform="uppercase"
								fontWeight="semibold"
								test="projects"
								onClick={() => navigateTo('#projects')}
								aria-label="Go to projects section of the home page"
						>projects</Button>
						<Button
								variant="ghost"
								display="flex"
								justifyContent="flex-end"
								size="md"
								py={{base: 6, md: 0}}
								textTransform="uppercase"
								fontWeight="semibold"
								onClick={() => navigateTo("#about")}
								aria-label="Go to about section of the home page"
						>about</Button>
						<Button
								variant="ghost"
								display="flex"
								justifyContent="flex-end"
								size="md"
								py={{base: 6, md: 0}}
								textTransform="uppercase"
								fontWeight="semibold"
								onClick={() => navigateTo("#contact")}
								aria-label="Go to contact section of the home page"
						>contact</Button>
					</Stack>
				</Show>
			</Flex>
	)
}