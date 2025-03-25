export default function Section({children, ref}) {
  return (
    <section className="section" ref={ref}>
      <div className="section--container">
        {children}
      </div>
    </section>
  )
}