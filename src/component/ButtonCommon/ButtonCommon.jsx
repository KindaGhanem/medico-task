import './ButtonCommon.css'
import { Button } from 'react-bootstrap'

export default function ButtonCommon({BtnDesc}) {
  return (
    <Button variant="info" className='text-nowrap font-common main-bg-color text-white button-common'>{BtnDesc}</Button>
  )
}
