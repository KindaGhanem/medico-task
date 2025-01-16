import './ContentParagraph.css'
import ButtonCommon from '../ButtonCommon/ButtonCommon'

export default function ContentParagraph({h1 , desc , btnsinfo ,background}) {
  return (
    <div className= {`content p-3 font-color ${background}`}>
        <h1 className='fs-2'>{h1}</h1>
        <p  className='fs-5'>{desc}</p>
        <ButtonCommon BtnDesc={btnsinfo} />
    </div>
  )
}
