import './Section4About.css'
import MainTitleHeader from '../MainTitleHeader/MainTitleHeader'
import InfoPartCommon from '../InfoPartCommon/InfoPartCommon'
import imgAbout from './../../assets/img/about.jpg'
import imgAbout2 from './../../assets/img/features.jpg'


import { Col, Row } from 'react-bootstrap'

import { FaUserMd } from "react-icons/fa";
import { FaHospital } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import { FaAward } from "react-icons/fa";

import CardSecAbout from '../CardSecAbout/CardSecAbout'

import { FaHandHoldingMedical } from "react-icons/fa";
import { FaSuitcaseMedical } from "react-icons/fa6";
import { FaStaffSnake } from "react-icons/fa6";
import { FaLungs } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";




export default function Section4About({icon , textli , textli2 , textli3 ,p3 }) {
  return (
    <section className='main-padding SecAbout pt-5' id='about' >
         <MainTitleHeader h2='About Us' text='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit' />
          <InfoPartCommon imgSec4={imgAbout} textImg='about-image' h2='Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.' p1='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' >
          <div className='play-icon-bg'><IoIosPlay /></div> 
            <ul className='ps-0'>
              <li className='mb-3'>
                {icon}
                {textli}
              </li>
              <li className='mb-3'>
                {icon}
                {textli2}
              </li>
              <li className='mb-3'>
                {icon}
                {textli3}
                
              </li>
            </ul>
            <p>{p3}</p>
            
          </InfoPartCommon>
          <Row>
            <Col className='col-sm-6 col-md-6 col-lg-3 col-12 mt-3' >
              <CardSecAbout icon={<FaUserMd className='fs-1 me-4 main-color ' />} title='25' text='doctor' shadow='shadow' />
            </Col>

            <Col className='col-sm-6 col-md-6 col-lg-3 col-12 mt-3' >
              <CardSecAbout icon={<FaHospital className='fs-1 me-4 main-color ' />} title='15' text='department'shadow='shadow' />
            </Col>
            
            <Col className='col-sm-6 col-md-6 col-lg-3 col-12 mt-3' >
              <CardSecAbout icon={<FaFlask className='fs-1 me-4 main-color ' />} title='8' text='researchlabs' shadow='shadow' />
            </Col>

            <Col className='col-sm-6 col-md-6 col-lg-3 col-12 mt-3' >
              <CardSecAbout icon={<FaAward className='fs-1 me-4 main-color ' />} title='150' text='awards' shadow='shadow' />
            </Col>
          </Row>

          <InfoPartCommon imgSec4={imgAbout2} textImg='featured-image' h2='Enim quis est voluptatibus aliquid consequatur fugiat' p1='Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi' normal='normal' after='after' height='height'>

            <Col>
              <CardSecAbout icon={<FaHandHoldingMedical className='fs-1  main-color ' />} title='lorem Ipstm' text='Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident' backgroundWhite='backgroundWhite' shadow2='shadow2' />
            </Col>

            <Col>
              <CardSecAbout icon={<FaSuitcaseMedical className='fs-1 main-color ' />} title='Nemo Enim' text='t vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque' backgroundWhite='backgroundWhite'  shadow2='shadow2' />
            </Col>
            
            <Col>
              <CardSecAbout icon={<FaStaffSnake className='fs-1 main-color ' />} title='Dine Pad' text='Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis' backgroundWhite='backgroundWhite'  shadow2='shadow2' />
            </Col>

            <Col>
              <CardSecAbout icon={<FaLungs className='fs-1 main-color ' />} title='Tride clov' text='Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet. Et eligendi' backgroundWhite='backgroundWhite'  shadow2='shadow2' />
            </Col>
          
          </InfoPartCommon>

    </section>
  )
}
