import './AppointmentSection.css'
import MainTitleHeader from '../MainTitleHeader/MainTitleHeader'
import FormCommon from '../FormCommon/FormCommon'
import { Col, Row } from 'react-bootstrap'
import SelectForm from '../SelectForm/SelectForm'
import ButtonCommon from '../ButtonCommon/ButtonCommon'

export default function AppointmentSection({info}) {
  return (
    <section className='py-5 main-padding sub-color text-center'>
        <MainTitleHeader h2='MAKE AN APPOINTMENT' text='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit' />
        <Row>
        <Col className='col-sm-6 col-md-4 col-lg-4 col-12 mt-3' >
            <FormCommon type='text' holder='Your Name' />
        </Col>
        <Col className='col-sm-6 col-md-4 col-lg-4 col-12 mt-3' >
            <FormCommon type='text' holder='Your Email'  />
        </Col>
        <Col className='col-sm-6 col-md-4 col-lg-4 col-12 mt-3' >
            <FormCommon type='text' holder='Your Phone'  />
        </Col>
        </Row>
        <Row>
        <Col className='col-sm-6 col-md-4 col-lg-4 col-12 mt-3' >
            <FormCommon type='date' holder='Your Name' />
        </Col>
        <Col className='col-sm-6 col-md-4 col-lg-4 col-12 mt-3' >
            <SelectForm option='Select Department' />
        </Col>
        <Col className='col-sm-6 col-md-4 col-lg-4 col-12 mt-3' >
            <SelectForm option='Select Doctor' />
        </Col>
        </Row>
        <textarea placeholder={info} className='w-100 my-4 area-height'></textarea>
        <ButtonCommon BtnDesc='Make An Appointment' />




    </section>
  )
}
