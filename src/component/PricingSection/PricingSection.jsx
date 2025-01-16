import './PricingSection.css'
import MainTitleHeader from '../MainTitleHeader/MainTitleHeader'
import CardPrice from '../CardPrice/CardPrice'
import { Col, Row } from 'react-bootstrap'

export default function PricingSection() {

  return (
    <>
    <section className='main-padding py-5'>
       
        <MainTitleHeader h2='Pricing' text='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit' />
        <Row className='py-5'>
        <Col className='col-lg-3 col-md-6 col-sm-6 col-12'>
            <CardPrice header='Free' sympol='$' number={<strong>0 </strong>} title='/ month' item1= 'Aida dere' item2= 'Nec feugiat nisl' item3= 'Nulla at volutpat dola' item4= {<span className='list-none'>Pharetra massa</span>} item5=  {<span className='list-none'>Massa ultricies mi</span>}/>
        </Col>
        <Col className='col-lg-3 col-md-6 col-sm-6 col-12'>
            <CardPrice header='Business' sympol='$' number={<strong>19</strong>} title='/ month' item1= 'Aida dere' item2= 'Nec feugiat nisl' item3= 'Nulla at volutpat dola' item4= 'Pharetra massa' item5= {<span className='list-none'>Massa ultricies mi</span>}  />
        </Col>
        <Col className='col-lg-3 col-md-6 col-sm-6 col-12'>
            <CardPrice header='Developer' sympol='$' number={<strong>29 </strong>} title=' / month' item1= 'Aida dere' item2= 'Nec feugiat nisl' item3= 'Nulla at volutpat dola' item4= 'Pharetra massa' item5= 'Massa ultricies mi' />
        </Col>
        <Col className='col-lg-3 col-md-6 col-sm-6 col-12'>
            <CardPrice header='Ultimate' sympol='$' number={<strong>49 </strong>} title=' / month' item1= 'Aida dere' item2= 'Nec feugiat nisl' item3= 'Nulla at volutpat dola' item4= 'Pharetra massa' item5= 'Massa ultricies mi'>
                <div className=' Word-Advance position-absolute card-test-color text-white p-2 z-3 top-0 fs-5 main-bg-color'>
                    advanced
                </div>
            </CardPrice>
        </Col>


        </Row>

        </section>
        

    </>
  )
}
