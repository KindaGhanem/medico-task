import './MainTitleHeader.css'

export default function MainTitleHeader( {h2 , text} ) {
  return (
    <div className='MainTitle text-center'>
        <h2 className='fs-2 position-relative mb-4'>{h2}</h2>
        <p className='fs-5'>{text}</p>
    </div>
  )
}
