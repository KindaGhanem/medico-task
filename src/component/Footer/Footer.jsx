import './Footer.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ListFooter from '../ListFooter/ListFooter';
import { Col, Row } from 'react-bootstrap';


export default function Footer() {
  return (

    <>
    <section className=' Footer main-padding sub-color w-100 font-color py-3'>
      <Row className='gap-4'>
      <Col className='col-sm-6 col-md-3 col-lg-3 col-12'>
        <div className='Footer-left'>
            <h3 className='mb-4'>Medicio</h3>
            <p className='par-address'>A108 Adam StreetNew York, NY 535022</p>
            <p> <strong>Email:</strong> +1 5589 55488 5</p>
            <p> <strong>Phone:</strong>  info@example.c5</p>
            <div className='d-flex gap-2 Social-Media-Footer'>
                <div className='BG-Icon-Footer rounded-circle d-flex justify-content-center align-items-center'> <FaXTwitter /> </div>
                <div className='BG-Icon-Footer rounded-circle d-flex justify-content-center align-items-center '> <FaFacebook /> </div>
                <div className='BG-Icon-Footer rounded-circle d-flex justify-content-center align-items-center '> <FaInstagram /> </div>
                <div className='BG-Icon-Footer rounded-circle d-flex justify-content-center align-items-center '> <FaLinkedin /> </div>
            </div>
        </div>
        </Col>

        <Col className='col-sm-6 col-md-2 col-lg-2 col-12'>
          <ListFooter h5='Useful Links' footerli1='Home' footerli2='About us' footerli3='Services' footerli4='Terms of service' footerli5='Privacy policy' />
        </Col>
        <Col className='col-sm-6 col-md-2 col-lg-2 col-12'>
          <ListFooter h5='Our Service' footerli1='Web Design' footerli2='Web Development' footerli3='Product Management' footerli4='Marketing' footerli5='Graphic Design' />
        </Col>
        <Col className='col-sm-6 col-md-2 col-lg-2 col-12'>
          <ListFooter h5='Hic solutasetp' footerli1='Molestiae accusamus iure' footerli2='Excepturi dignissimos' footerli3='Suscipit distinctio' footerli4='Dilecta' footerli5='Sit quas consectetu' />
        </Col>
        <Col className='col-sm-6 col-md-2 col-lg-2 col-12'>
          <ListFooter h5='Nobis illum' footerli1='Ipsam' footerli2='Laudantium dolorum' footerli3='Services' footerli4='Trodelas' footerli5='Flexo' />
        </Col>
        </Row>
    </section>
    <div className=' py-2 Copy-Part text-black text-center main-padding sub-color'>
        <p className='m-auto'> © Copyright Medicio All Rights Reserved Designed by BootstrapMade </p> 
    </div>

    </>
  )
}
