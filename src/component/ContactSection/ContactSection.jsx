import './ContactSection.css'
import MainTitleHeader from '../MainTitleHeader/MainTitleHeader'
import { BsGeoAltFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import FormCommon from '../FormCommon/FormCommon';
import ButtonCommon from '../ButtonCommon/ButtonCommon';


export default function ContactSection() {
  return (
    <section className='py-4 main-padding'>

         <MainTitleHeader h2='Contact' text='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit' />
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10812.784765598524!2d55.286519411447635!3d25.19378675257806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682f700cf983%3A0xb5cc58b076c0b904!2z2YjYs9i3INmF2K_ZitmG2Kkg2K_YqNmKIC0g2K_YqNmKIC0g2KfZhNil2YXYp9ix2KfYqiDYp9mE2LnYsdio2YrYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2s!4v1725926823041!5m2!1sar!2s"  height="450" className='w-100'></iframe>

         <div className='d-flex justify-content-between flex-wrap w-100 Bottom-Part-Footer gap-1'>
            <div className='contact-part-left d-flex flex-column'>
                <div className='text-center shadow-contact my-4 p-3 w-100'>
                   <div className='bg-icon-contact main-color rounded-circle d-flex justify-content-center align-items-center  m-auto'> <BsGeoAltFill /></div>
                    <p className='font-color fs-4 fw-semibold'>Adress</p>
                    <p className='font-color'>A108 Adam Street, New York, NY 535022</p>
                </div>
                <div className='d-flex w-100'>
                    <div className='text-center shadow-contact my-4  p-3 w-50'>
                       <div className='bg-icon-contact main-color rounded-circle d-flex justify-content-center align-items-center m-auto'><BsFillTelephoneFill /></div> 
                        <p className='font-color fs-4 fw-semibold'>Call Us</p>
                        <p className='font-color'>+1 5589 55488 55</p>
                    </div>
                    <div className='text-center shadow-contact my-4 ms-3 p-3 w-50'>
                        <div className='bg-icon-contact main-color rounded-circle d-flex justify-content-center align-items-center  m-auto'> <FaEnvelope /></div>
                        <p className='font-color fs-4 fw-semibold'>Email Us</p>
                        <p className='font-color'>info@example.com</p>
                    </div>
                </div>
            </div>
            
            <div className='contact-part-right p-4 mt-4 d-flex justify-content-between align-items-center flex-column shadow-contact'>
              <div className='d-flex justify-content-between w-100 '>
                <FormCommon type='text' holder='Your Name' margin='margin' />
                <FormCommon  type='email' holder='Your Email' margin='margin' />
              </div>
              <FormCommon  type='text' holder='subject' margin='margin'/>
              <textarea placeholder='Message' className='border-0 shadow-contact w-100 h-25'></textarea>
              <ButtonCommon BtnDesc='SendMessage' />
            </div>
 

         </div>

    </section>
  )
}
