import { Card, Carousel, Col, Row } from 'react-bootstrap'
import './SliderCommon.css'
import CardTestimonial from '../CardTestimonial/CardTestimonial'
import imgtest1 from './../../assets/img/testimonials/testimonials-1.jpg'
import imgtest2 from './../../assets/img/testimonials/testimonials-2.jpg'
import imgtest3 from './../../assets/img/testimonials/testimonials-3.jpg'
import imgtest4 from './../../assets/img/testimonials/testimonials-4.jpg'
import imgtest5 from './../../assets/img/testimonials/testimonials-5.jpg'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


export default function SliderCommon() {


  return (
    <>


    <Carousel className='SliderTestimonial py-4'>

      <Carousel.Item className='Item-Test'>
        <Row className='justify-content-center align-items-center row-test'>
        <CardTestimonial cardtesttext='Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam. ' imgtest={imgtest4} name='Jana Karles' work='Store Owner' icon1={<FaQuoteLeft className='main-color' />} icon2={<FaQuoteRight  className='main-color' />} />
        <CardTestimonial cardtesttext='Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid. ' imgtest={imgtest2} name='Jana Karles' work='Store Owner' icon1={<FaQuoteLeft className='main-color' />} icon2={<FaQuoteRight  className='main-color' />} />
        <CardTestimonial cardtesttext=' Eninm nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noister aute aioet eram fore quis sint minim.' imgtest={imgtest3} name='Jana Karles' work='Store Owner' icon1={<FaQuoteLeft className='main-color' />} icon2={<FaQuoteRight  className='main-color'/>} />
      </Row>
      </Carousel.Item> 

      <Carousel.Item className='Item-Test'>
        <Row className='justify-content-center align-items-center row-test'>
          <CardTestimonial cardtesttext=' Eninm nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noister aute aioet eram fore quis sint minim.' imgtest={imgtest3} name='Jana Karles' work='Store Owner' icon1={<FaQuoteLeft className='main-color' />} icon2={<FaQuoteRight  className='main-color' />} />
          <CardTestimonial cardtesttext='Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam. ' imgtest={imgtest4} name='Jana Karles' work='Store Owner' icon1={<FaQuoteLeft className='main-color' />} icon2={<FaQuoteRight  className='main-color' />} />
          <CardTestimonial cardtesttext='Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid. ' imgtest={imgtest2} name='Jana Karles' work='Store Owner' icon1={<FaQuoteLeft className='main-color' />} icon2={<FaQuoteRight  className='main-color' />} />
      </Row>

      </Carousel.Item>

      <Carousel.Item className='Item-Test'>
        <Row className='justify-content-center align-items-center row-test'>
          <CardTestimonial cardtesttext='Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam. ' imgtest={imgtest1} name='Jana Karles' work='Store Owner' icon1={<FaQuoteLeft className='main-color' />} icon2={<FaQuoteRight  className='main-color' />} />
          <CardTestimonial cardtesttext='Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid. ' imgtest={imgtest2} name='Jana Karles' work='Store Owner' icon1={<FaQuoteLeft className='main-color' />} icon2={<FaQuoteRight  className='main-color' />} />
          <CardTestimonial cardtesttext='Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid. ' imgtest={imgtest5} name='Jana Karles' work='Store Owner' icon1={<FaQuoteLeft className='main-color' />} icon2={<FaQuoteRight  className='main-color' />} />
        </Row>

      </Carousel.Item>
      <Carousel.Item className='Item-Test'>
        <Row className='justify-content-center align-items-center row-test'>
          <CardTestimonial cardtesttext='Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam. ' imgtest={imgtest1} name='Jana Karles' work='Store Owner' icon1={<FaQuoteLeft className='main-color' />} icon2={<FaQuoteRight  className='main-color' />} />
          <CardTestimonial cardtesttext='Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid. ' imgtest={imgtest2} name='Jana Karles' work='Store Owner' icon1={<FaQuoteLeft className='main-color' />} icon2={<FaQuoteRight  className='main-color' />} />
          <CardTestimonial cardtesttext='Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid. ' imgtest={imgtest5} name='Jana Karles' work='Store Owner' icon1={<FaQuoteLeft className='main-color' />} icon2={<FaQuoteRight  className='main-color' />} />
        </Row>

      </Carousel.Item>
      <Carousel.Item className='Item-Test'>
        <Row className='justify-content-center align-items-center row-test'>
          <CardTestimonial cardtesttext='Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam. ' imgtest={imgtest1} name='Jana Karles' work='Store Owner' icon1={<FaQuoteLeft className='main-color' />} icon2={<FaQuoteRight  className='main-color' />} />
          <CardTestimonial cardtesttext='Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid. ' imgtest={imgtest2} name='Jana Karles' work='Store Owner' icon1={<FaQuoteLeft className='main-color' />} icon2={<FaQuoteRight  className='main-color' />} />
          <CardTestimonial cardtesttext='Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid. ' imgtest={imgtest5} name='Jana Karles' work='Store Owner' icon1={<FaQuoteLeft className='main-color' />} icon2={<FaQuoteRight  className='main-color' />} />
        </Row>

      </Carousel.Item>
    </Carousel>




    </>
  )
}
