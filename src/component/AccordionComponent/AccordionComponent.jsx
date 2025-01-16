import React from 'react'
import { Accordion } from 'react-bootstrap'

export default function AccordionComponent({ask , answer}) {
  return (
    <Accordion className='my-4'>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='font-color fs-1'>{ask}</Accordion.Header>
        <Accordion.Body className='font-color'>
            {answer}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
