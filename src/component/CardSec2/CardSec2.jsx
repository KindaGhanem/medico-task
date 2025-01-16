import './CardSec2.css'
import { Card } from 'react-bootstrap'

export default function CardSec2({icon , title , text ,fflex ,afterr , shadoww , back}) {
  return (
    <Card style={{ height: '250px' }} className={` card-service bg-white font-color d-block border-0 ${shadoww} ${fflex}`} >
    <Card.Body>
      <Card.Title className={`${back}`}>{icon}</Card.Title>

      <Card.Subtitle className= {` my-4 fs-4 ${afterr}`}>{title}</Card.Subtitle>
      <Card.Text >
        {text}
      </Card.Text> 
    </Card.Body> 
    </Card>
  )
}
