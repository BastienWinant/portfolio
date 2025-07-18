export default function Section({ref, children}) {
	return (
		<section className="section" ref={ref}>
			{children}
		</section>
	)
}