import './CardPrice.css'
import { Card } from 'react-bootstrap'
import ButtonCommon from '../ButtonCommon/ButtonCommon'

export default function CardPrice({ sympol,  number , header , title , item1 , item2 ,item3 , item4 , item5 , children}) {
  return (
    <>
    <Card className='border-0 cardPrice position-relative'>
        <Card.Header className='font-color sub-color text-center p-4 fw-semibold fs-5 border-0'>{header}  {children} </Card.Header>
        <Card.Body>
          <Card.Title className=' text-center'><span className=' sympol-card font-color'>{sympol}</span><span className='fs-1 font-color'>{number}</span> <span className='color-text fs-5 fw-0' >{title}</span></Card.Title>
          <Card.Text className='listCardPrice text-black text-center'>
          <ul>
          <li className='mt-3'>{item1}</li>
          <li className='mt-3'>{item2}</li>
          <li className='mt-3'>{item3}</li>
          <li className='mt-3'>{item4}</li>
          <li className='mt-3'>{item5}</li>
        </ul>


          </Card.Text>
          <Card.Text className='p-3 text-center sub-color'>
          <ButtonCommon BtnDesc="Buy Now " />
          </Card.Text>
        </Card.Body>
         
    </Card>
    </>
  )
}
