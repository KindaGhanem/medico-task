import './CardTestimonial.css'
import { Card } from 'react-bootstrap'

export default function CardTestimonial({cardtesttext , name , work , imgtest , icon1 , icon2 }) {
  return (
    <>
    <Card style={{ width: '360px' , height : '400px'}} className= 'border-0 Card-Testimotial'>
      <Card.Body>
        <Card.Text className= 'fst-italic font-color card-test-color rounded-3 pb-5 pt-3 px-3'>
           {icon1} {cardtesttext} {icon2}
        </Card.Text>
        <Card.Img src={imgtest} style={{ width: '60px' }} className='rounded-circle image-card' />
        <Card.Text className='cardTestText'>
            <h3 className='fw-semibold font-color'>{name}</h3>
            <p className='font-color'>{work}</p>
        </Card.Text>
      </Card.Body>
    </Card>

        
    </>
  )
}
