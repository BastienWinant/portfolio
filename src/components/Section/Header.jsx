export default function Header({children}) {
  return (
    <header className="section--header">
      <h2 className="section--title">{children}</h2>
    </header>
  )
}