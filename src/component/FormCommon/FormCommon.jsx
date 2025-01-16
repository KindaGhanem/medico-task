import './FormCommon.css'
import { Form } from 'react-bootstrap'

export default function FormCommon({type , holder , margin}) {
  return (
    <>
    <Form.Control className={`rounded-0 form-input border-0 shadow-contact ${margin}`}
      type={type}
      placeholder={holder}
    />
    </>
  )
}
