import './SectionCards.css'
import CardSec2 from '../CardSec2/CardSec2'

import { FaHeartbeat } from "react-icons/fa";
import { FaPills } from "react-icons/fa";
import { FaThermometer } from "react-icons/fa";
import { FaDna } from "react-icons/fa";
import { Col, Row } from 'react-bootstrap';

 
export default function SectionCards() {
  return (
    <section className='py-5 main-padding Sec-Cards '>
      <Row>
          <Col className='col-sm-6 col-md-6 col-lg-3 col-12 mt-3 sec2-card' >
            <CardSec2 icon={<FaHeartbeat className='main-color fs-1' />} title='Lorem Ipsum' text='Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi' shadoww='shadoww' />
          </Col>
          <Col className='col-sm-6 col-md-6 col-lg-3 col-12 mt-3' >
            <CardSec2 icon={<FaPills className='main-color fs-1' />} title='Sed ut perspici' text='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'  shadoww='shadoww' />
          </Col>
          <Col className='col-sm-6 col-md-6 col-lg-3 col-12 mt-3' >
            <CardSec2 icon={<FaThermometer className='main-color fs-1' />} title='Magni Dolores' text='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia' shadoww='shadoww' />
          </Col>
          <Col className='col-sm-6 col-md-6 col-lg-3 col-12 mt-3' >
            <CardSec2 icon={<FaDna className='main-color fs-1' />} title='Nemo Enim' text='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis' shadoww='shadoww' />
          </Col>
      </Row>
    </section>
  )
}
