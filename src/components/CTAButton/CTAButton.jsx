import './index.css'
export default function CTAButton({text}) {
  return (
    <button type="button" className="cta-btn">
      {text}
    </button>
  )
}