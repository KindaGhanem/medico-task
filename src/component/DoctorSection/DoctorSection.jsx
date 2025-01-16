

import MainTitleHeader from '../MainTitleHeader/MainTitleHeader'
import CardDoctor from '../CardDoctor/CardDoctor'
import { Col, Row } from 'react-bootstrap'
import imgdoctor1 from './../../assets/img/doctors/doctors-1.jpg'
import imgdoctor2 from './../../assets/img/doctors/doctors-2.jpg'
import imgdoctor3 from './../../assets/img/doctors/doctors-3.jpg'
import imgdoctor4 from './../../assets/img/doctors/doctors-4.jpg'

export default function DoctorSection() {
  return (
    <section className='sub-color py-5 main-padding' id='doctors'>
     <MainTitleHeader h2='Doctors' text='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit' />
    <Row className='py-5'>
        <Col className='col-lg-3 col-md-6 col-sm-6 col-12'>
            <CardDoctor imgdoctor={imgdoctor1} titleDoctor='Walter White' descDoctor='Chief Medical Officer' />
        </Col>
        <Col className='col-lg-3 col-md-6 col-sm-6 col-12'>
            <CardDoctor imgdoctor={imgdoctor2} titleDoctor='Sarah Jhonson' descDoctor='Anesthesiologist' />
        </Col>
        <Col className='col-lg-3 col-md-6 col-sm-6 col-12'>
            <CardDoctor imgdoctor={imgdoctor3} titleDoctor='William Anderson' descDoctor='Cardiology' />
        </Col>
        <Col className='col-lg-3 col-md-6 col-sm-6 col-12'>
            <CardDoctor imgdoctor={imgdoctor4} titleDoctor='Amanda Jepson' descDoctor='Neurosurgeon' />
        </Col>
    </Row>


    </section>
  )
}
