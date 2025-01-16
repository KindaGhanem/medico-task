import './CardDoctor.css'
import { Card } from 'react-bootstrap'

export default function CardDoctor({imgdoctor , titleDoctor ,descDoctor }) {
  return (
    <>
    <Card className='mt-3 cardDoctor border-0'>
      <Card.Img variant="top" src={imgdoctor} />
      <Card.Body>
        <Card.Title>{titleDoctor}</Card.Title>
        <Card.Text>
            {descDoctor}
        </Card.Text>
      </Card.Body>
    </Card>

    </>
  )
}
