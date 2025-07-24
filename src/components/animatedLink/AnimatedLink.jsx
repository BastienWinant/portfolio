import clsx from "clsx";
import "./AnimatedLink.css"

export default function AnimatedLink({children, href, className, ...props}) {
	const classes = clsx('animated-link', className)
	return (
			<a href={href} className={classes} {...props}>
				<div className="animated-link__overlay"></div>
				<div className="animated-link__text">{children}</div>
			</a>
	)
}