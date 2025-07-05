import { Box, Stack, Link } from "@chakra-ui/react";
import { NavLink } from "react-router";

export default function Header() {
	return (
			<Box
					position="fixed"
					top="0"
					w="100vw"
					border="2px solid blue"
			>
				<Stack direction={{base: "column", md: "row"}} gap="0">
					{/*<HashLink ref={homeRef}>home</HashLink>*/}
					{/*<HashLink ref={projectsRef}>projects</HashLink>*/}
					{/*<HashLink ref={aboutRef}>about</HashLink>*/}
					{/*<HashLink ref={contactRef}>contact</HashLink>*/}
					<Link asChild>
						<NavLink to={{pathname: "/"}}>home</NavLink>
					</Link>
					<Link asChild>
						<NavLink to={{pathname: "/", hash: "#projects"}}>projects</NavLink>
					</Link>
					<Link asChild>
						<NavLink to={{pathname: "/", hash: "#about"}}>about</NavLink>
					</Link>
					<Link asChild>
						<NavLink to={{pathname: "/", hash: "#contact"}}>contact</NavLink>
					</Link>
				</Stack>
			</Box>
	)
}