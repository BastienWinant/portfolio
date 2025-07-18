import "./AnchorLink.css";

export default function AnchorLink({children, targetRef, callBack, ...props}) {
	function handleClick() {
		callBack && callBack();
		targetRef.current.scrollIntoView({behavior: "smooth"});
	}
	return (
		<button className="anchor-link" onClick={handleClick} {...props}>{children}</button>
	)
}