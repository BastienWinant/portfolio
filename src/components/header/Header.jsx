import {Flex, Stack, Link, HStack, Avatar, Text, StackSeparator, IconButton} from "@chakra-ui/react";
import { NavLink } from "react-router";
import { FaBars } from "react-icons/fa6";

export default function Header() {
	return (
			<Flex
					position="fixed"
					top="0"
					w="100vw"
					direction={{base: "column", md: "row"}}
					align={{base: "stretch", md: "center"}}
					justify={{base: "flex-start", md: "space-between"}}
					py="2"
					pb={{base: 0, md: 2}}
			>
				<Flex flexGrow="1" justify="space-between">
					<HStack gap="3">
						<Avatar.Root>
							<Avatar.Fallback name="Bastien Winant" />
							<Avatar.Image src="https://images.unsplash.com/photo-1750378057935-ec216313425a" />
						</Avatar.Root>
						<Text fontWeight="medium">Bastien Winant</Text>
					</HStack>
					<IconButton aria-label="Toggle nav" hideFrom="md">
						<FaBars />
					</IconButton>
				</Flex>
				<Stack
						direction={{base: "column", md: "row"}}
						gap="0"
						gapX="10"
						separator={<StackSeparator hideFrom="md" />}
				>
					<Link
							display="flex"
							justifyContent={{base: "flex-end", md: "center"}}
							px="1"
							py={{base: 3, md: 2}}
							asChild
					>
						<NavLink to={{pathname: "/"}}>
							<Text fontWeight="semibold" fontSize="sm" textTransform="uppercase">home</Text>
						</NavLink>
					</Link>
					<Link
							display="flex"
							justifyContent={{base: "flex-end", md: "center"}}
							px="1"
							py={{base: 3, md: 2}}
							asChild
					>
						<NavLink to={{pathname: "/", hash: "#projects"}}>
							<Text fontWeight="semibold" fontSize="sm" textTransform="uppercase">projects</Text>
						</NavLink>
					</Link>
					<Link
							display="flex"
							justifyContent={{base: "flex-end", md: "center"}}
							px="1"
							py={{base: 3, md: 2}}
							asChild
					>
						<NavLink to={{pathname: "/", hash: "#about"}}>
							<Text fontWeight="semibold" fontSize="sm" textTransform="uppercase">about</Text>
						</NavLink>
					</Link>
					<Link
							display="flex"
							justifyContent={{base: "flex-end", md: "center"}}
							px="1"
							py={{base: 3, md: 2}}
							asChild
					>
						<NavLink to={{pathname: "/", hash: "#contact"}}>
							<Text fontWeight="semibold" fontSize="sm" textTransform="uppercase">contact</Text>
						</NavLink>
					</Link>
				</Stack>
			</Flex>
	)
}