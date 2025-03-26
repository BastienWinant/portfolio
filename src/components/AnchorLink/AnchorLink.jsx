import './index.css'

export default function AnchorLink({children, ref, callback}) {
  function scrollToTarget() {
    callback && callback()
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div role="button" onClick={scrollToTarget} className='anchor-link'>{children}</div>
  )
}