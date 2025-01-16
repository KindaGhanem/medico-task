import './InfoPartCommon.css'
import { IoIosPlay } from "react-icons/io";

export default function InfoPartCommon({imgSec4 , textImg , h2 , p1 ,children , normal ,after ,height }) {
  return (
    <div className='d-flex justify-content-between flex-wrap gap-3 InfoPart pt-5 py-5 position-relative'>
          <img src={imgSec4} alt={textImg} className={`${height}`} ></img>

          <div className= 'right-part-about'>
            <h className={`fs-3 fw-semibold font-color ${after}`} >{h2}</h>
            <p className={` fst-italic mt-3 ${normal}`}>{p1}</p>
            {children}
          </div>
    </div>
  )
}
