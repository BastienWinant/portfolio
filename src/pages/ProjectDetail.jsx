import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function ProjectDetail() {
	const params = useParams();
	const [project, setProject] = useState(null);

	useEffect(() => {
		setProject({id: 1, title: 'My Project', imgUrl: 'My Img'})
	}, [params.id]);
	return (
			<>
				{project ? <div>{project.title}</div> : <h2>Loading...</h2>}
			</>
	)
}