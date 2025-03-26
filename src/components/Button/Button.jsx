import './index.css'

export default function Button({children, callbackFunc}) {
  return (
    <button type='button' className='btn' onClick={() => callbackFunc()}>
      <div className='btn--slider'></div>
      <span className='btn--text'>{children}</span>
    </button>
  )
}