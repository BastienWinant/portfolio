import './index.css'

export default function Button({text, callbackFunc}) {
  return (
    <button type='button' className='btn' onClick={() => callbackFunc()}>
      <div className='btn--slider'></div>
      <span className='btn--text'>{text}</span>
    </button>
  )
}