import React from 'react'
import AccordionComponent from '../AccordionComponent/AccordionComponent'
import MainTitleHeader from '../MainTitleHeader/MainTitleHeader'

export default function QuestionSection() {
  return (
    <section className='main-padding sub-color'>
         <MainTitleHeader h2='Frequently Asked Questions' text='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit' />
         
         <AccordionComponent ask='Non consectetur a erat nam at lectus urna duis?' answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi, dicta ea voluptas aut earum debitis eius nobis culpa molestiae.' />
         <AccordionComponent ask='Feugiat scelerisque varius morbi enim nunc faucibus?' answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi, dicta ea voluptas aut earum debitis eius nobis culpa molestiae.' />
         <AccordionComponent ask='Dolor sit amet consectetur adipiscing elit pellentesque?' answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi, dicta ea voluptas aut earum debitis eius nobis culpa molestiae.' />
         <AccordionComponent ask='Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?' answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi, dicta ea voluptas aut earum debitis eius nobis culpa molestiae.' />
         <AccordionComponent ask='Tempus quam pellentesque nec nam aliquam sem et tortor?' answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi, dicta ea voluptas aut earum debitis eius nobis culpa molestiae.' />
         <AccordionComponent ask='Perspiciatis quod quo quos nulla quo illum ullam?' answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi, dicta ea voluptas aut earum debitis eius nobis culpa molestiae.' />

    </section>
  )
}