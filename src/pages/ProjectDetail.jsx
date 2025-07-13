import { useParams} from "react-router";
import { Box } from "@chakra-ui/react";

export default function ProjectDetail() {
	const params = useParams();

	return (
			<Box as="main">
				this is a project
			</Box>
	)
}