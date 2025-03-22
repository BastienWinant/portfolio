export default function Section({children}) {
  return (
    <section className="section">
      <div className="section--container">
        {children}
      </div>
    </section>
  )
}