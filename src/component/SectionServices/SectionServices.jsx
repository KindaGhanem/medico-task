import CardSec2 from '../CardSec2/CardSec2'
import MainTitleHeader from '../MainTitleHeader/MainTitleHeader'
import './SectionServices.css'
import { FaHeartbeat } from "react-icons/fa";
import { FaPills } from "react-icons/fa";
import { FaDna } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa";
import { FaWheelchair } from "react-icons/fa";
import { FaNotesMedical } from "react-icons/fa";


import { Col, Row } from 'react-bootstrap';


export default function SectionServices() {
  return (
    <section className='main-padding' id='serviced'>
         <MainTitleHeader h2='Services' text='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit' />
         <Row>
          <Col className='col-sm-6 col-md-6 col-lg-4 col-12 mt-3' >
            <CardSec2 icon={<FaHeartbeat className='main-color fs-1' />} title='Nesciunt Mete' text='
Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.' fflex='fflex' afterr='afterr' back='back'  />
          </Col>
          <Col className='col-sm-6 col-md-6 col-lg-4 col-12 mt-3' >
            <CardSec2 icon={<FaPills className='main-color fs-1' />} title='Sed ut perspici' text='
Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.' fflex='fflex'afterr='afterr' back='back'  />
          </Col>
          <Col className='col-sm-6 col-md-6 col-lg-4 col-12 mt-3' >
            <CardSec2 icon={<FaHospitalUser className='main-color fs-1' />} title='Magni Dolores' text='
Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.' fflex='fflex' afterr='afterr' back='back'  />
          </Col>
          <Col className='col-sm-6 col-md-6 col-lg-4 col-12 mt-3' >
            <CardSec2 icon={<FaDna className='main-color fs-1' />} title='Nemo Enim' text='At 
Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.' fflex='fflex' afterr='afterr' back='back'  />
          </Col>
          <Col className='col-sm-6 col-md-6 col-lg-4 col-12 mt-3' >
            <CardSec2 icon={<FaWheelchair className='main-color fs-1' />} title='Nemo Enim' text='
Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur. ' fflex='fflex' afterr='afterr' back='back'  />
          </Col>
          <Col className='col-sm-6 col-md-6 col-lg-4 col-12 mt-3' >
            <CardSec2 icon={<FaNotesMedical className='main-color fs-1' />} title='Nemo Enim' text='
Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.' fflex='fflex' afterr='afterr' back='back'  />
          </Col>
      </Row>
    </section>
  )
}
