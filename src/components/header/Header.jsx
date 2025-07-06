import { useState, useEffect } from "react";
import {
	Flex,
	Stack,
	Avatar,
	Link as ChakraLink,
	Text,
	LinkBox,
	LinkOverlay,
	StackSeparator,
	IconButton,
	Show
} from "@chakra-ui/react";
import { NavLink, Link } from "react-router";
import { FaBars, FaX } from "react-icons/fa6";

export default function Header() {
	const [windowWidth, setWindowWidth] = useState(window.width);
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
	return (
			<Flex
					position="fixed"
					top="0"
					w="100vw"
					direction={{base: "column", md: "row"}}
					align={{base: "stretch", md: "center"}}
					justify={{base: "flex-start", md: "space-between"}}
					py="2.5"
					gap="2"
					// border="2px solid red;"
			>
				<Flex flexGrow="1" justify="space-between" align="center">
					<LinkBox display="flex" alignItems="center" gap="3" borderWidth="medium">
						<Avatar.Root>
							<Avatar.Fallback name="Bastien Winant" />
							<Avatar.Image src="https://images.unsplash.com/photo-1750378057935-ec216313425a" />
						</Avatar.Root>
						<LinkOverlay asChild>
							<Link to="/"><Text fontWeight="medium">Bastien Winant</Text></Link>
						</LinkOverlay>
					</LinkBox>
					<IconButton
							aria-label="Toggle nav"
							hideFrom="md"
							size="xl"
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
							gapX="10"
							separator={<StackSeparator hideFrom="md" />}
							mb={{base: -2, md: 0}}
					>
						<ChakraLink
								display="flex"
								justifyContent={{base: "flex-end", md: "center"}}
								px="1"
								py={{base: 3, md: 1}}
								asChild
						>
							<NavLink to={{pathname: "/"}}>
								<Text fontWeight="semibold" fontSize="sm" textTransform="uppercase">home</Text>
							</NavLink>
						</ChakraLink>
						<ChakraLink
								display="flex"
								justifyContent={{base: "flex-end", md: "center"}}
								px="1"
								py={{base: 3, md: 1}}
								asChild
						>
							<NavLink to={{pathname: "/", hash: "#projects"}}>
								<Text fontWeight="semibold" fontSize="sm" textTransform="uppercase">projects</Text>
							</NavLink>
						</ChakraLink>
						<ChakraLink
								display="flex"
								justifyContent={{base: "flex-end", md: "center"}}
								px="1"
								py={{base: 3, md: 1}}
								asChild
						>
							<NavLink to={{pathname: "/", hash: "#about"}}>
								<Text fontWeight="semibold" fontSize="sm" textTransform="uppercase">about</Text>
							</NavLink>
						</ChakraLink>
						<ChakraLink
								display="flex"
								justifyContent={{base: "flex-end", md: "center"}}
								px="1"
								py={{base: 3, md: 1}}
								asChild
						>
							<NavLink to={{pathname: "/", hash: "#contact"}}>
								<Text fontWeight="semibold" fontSize="sm" textTransform="uppercase">contact</Text>
							</NavLink>
						</ChakraLink>
					</Stack>
				</Show>
			</Flex>
	)
}