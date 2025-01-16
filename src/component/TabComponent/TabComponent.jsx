import './TabComponent.css'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import imgDep1 from './../../assets/img/departments-1.jpg'

export default function TabComponent({tabs , content ,active , images} ) {
  return (
    <>
     <Tab.Container id="left-tabs-example" defaultActiveKey={active} >
      <Row>
        <Col className='col-sm-12 col-md-12 col-lg-4 col-xl-4 col-12'>
        <Nav variant="pills" className="flex-column">
          {tabs?.map((el , index) =>{
          return(
            <Nav.Item>
                <Nav.Link  eventKey={`${index}}`} className ='font-common text-black fw-semibold'>{el.links}</Nav.Link>
            </Nav.Item>
          )
        })}
        </Nav>
        </Col>
        <Col className='col-sm-12 col-md-12 col-lg-4 col-xl-4 col-12 order-sm-0 order-1'>
          <Tab.Content className='font-color'>
                <Tab.Pane eventKey="first">
                <h2>Cardiology</h2>
                <p className='mt-4'><span className='fst-italic my-3'>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona markaEt</span> nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                </Tab.Pane>

        {content?.map((elm , id) =>{
          return(
            <Tab.Pane eventKey={`${id}}`}>
                <h2>{elm.title}</h2>
                <p className='mt-4'><span className='fst-italic my-3'>{elm.span}</span>{elm.text}</p>
            </Tab.Pane>
          )
        })}
            
          </Tab.Content>
          </Col>

          <Col className='col-sm-12 col-md-12 col-lg-4 col-xl-4 col-12'>
          <Tab.Content>
            <Tab.Pane eventKey="first">
                <img src={imgDep1} alt='' className='img-tabs'></img>
            </Tab.Pane>
            
            {images?.map((element , id) =>{
                return(
                    <Tab.Pane eventKey={`${id}}`}>
                        <img src={element.img} alt={element.info} className='img-tabs'></img>
                    </Tab.Pane> 
          )
        })}

          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

    </>
  )
}
