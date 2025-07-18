export default function Header({children}) {
	return (
		<header className="section__header">
			<h2 className="section__title">{children}</h2>
		</header>
	)
}