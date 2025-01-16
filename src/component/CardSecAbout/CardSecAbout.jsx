import './CardSecAbout.css'
import { Card } from 'react-bootstrap'

export default function CardSecAbout({icon , title , text , shadow , backgroundWhite ,shadow2}) {
  return (
    <Card className= {`pe-5 ps-2 border-0 ${shadow} d-flex flex-row card-about `}>
      <div className={`bg-icon m-auto ${backgroundWhite} ${shadow2} `}>
        {icon}
      </div>
      <Card.Body className='d-flex justify-content-between flex-column'>
        <Card.Title className='fw-bold font-color'>{title}</Card.Title>
        <Card.Text className=' font-color'>
            {text}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
