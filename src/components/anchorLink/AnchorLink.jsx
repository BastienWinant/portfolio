import "./AnchorLink.css";

export default function AnchorLink({children, targetRef}) {
	function handleClick() {
		targetRef.current.scrollIntoView({behavior: "smooth"})
	}
	return (
		<button className="anchor-link" onClick={handleClick}>{children}</button>
	)
}