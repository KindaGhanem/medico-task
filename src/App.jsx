
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './component/TopNav/TopNav';
import { FaRegClock } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import NavBar from './component/NavBar/NavBar';
import logo from './assets/img/logo.png'
import Hero from './component/Hero/Hero';
import imghero1 from './assets/img/hero-carousel/hero-carousel-3.jpg'
import imghero2 from './assets/img/hero-carousel/hero-carousel-2.jpg'
import imghero3 from './assets/img/hero-carousel/hero-carousel-1.jpg'
import SectionCards from './component/SectionCards/SectionCards';
import Section3Help from './component/Section3Help/Section3Help.JSX';
import Section4About from './component/Section4About/Section4About';
import { BsCheck2All } from "react-icons/bs";
import SectionServices from './component/SectionServices/SectionServices';
import AppointmentSection from './component/AppointmentSection/AppointmentSection';
import DepartmentSection from './component/DepartmentSection/DepartmentSection';
import TestimomialSection from './component/TestimomialSection/TestimomialSection';
import DoctorSection from './component/DoctorSection/DoctorSection';
import GallerySection from './component/GallerySection/GallerySection';
import PricingSection from './component/PricingSection/PricingSection';
import QuestionSection from './component/QuestionSection/QuestionSection';
import ContactSection from './component/ContactSection/ContactSection';
import Footer from './component/Footer/Footer';



function App() {

const dropdown = {title : 'DROPDOWN' , option1: 'option1' , option2: 'option2' , option3: 'option3' }

const items =[
  {
    id:'home' ,
    name : "HOME"
  },
  {
    id:'about' ,
    name : "ABOUT"
  },
  {
    id:'serviced' ,
    name : "SERVICES"
  },
  {
    id:'department' ,
    name : "DEPARTMENTS"
  },
  {
    id:'doctors' ,
    name : "DOCTORS"
  },
]

  return (
    <>
    <TopNav day="Monday - Saturday" time="8AM to 10PM" text='Call us now' number=' +1 5589 55488 55' icon1={<FaRegClock className='mx-1' /> } icon2={<IoPhonePortraitOutline className='mx-1' />} />
    <NavBar logo={logo} infoLogo='logo' dropdown={dropdown} items={items} link='CONTACT' />
    <Hero img1={imghero1} img2={imghero2} img3={imghero3} infoimg='SliderImage'  />
    <SectionCards />
    <Section3Help />
    <Section4About icon={<BsCheck2All className='text-primary me-2' />} textli='Ullamco laboris nisi ut aliquip ex ea commodo consequat.' textli2='Duis aute irure dolor in reprehenderit in voluptate velit.' textli3='Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur' p3='Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident' />
    <SectionServices />
    <AppointmentSection info='Message (Optional)' />
    <DepartmentSection />
    <TestimomialSection />
    <DoctorSection />
    <GallerySection />
    <PricingSection />
    <QuestionSection />
    <ContactSection />
    <Footer />

    </>
  )
}

export default App
