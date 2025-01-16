
import { useRef } from 'react';



export default function TopNav({ day , time , text , number , icon1 , icon2}) {
  const nav = useRef(null)
  window.addEventListener("scroll" , ()=>{
    if(window.scrollY>20){
      nav.current.style.display='none';
    }
    else{
      nav.current.style.display='block';
    }
  })



  return (

      <div className='main-bg-color' ref={nav}>
          <div className=' py-2 d-flex justify-content-between align-items-center main-padding text-white fw-semibold font-common'>
            <div className='d-sm-block d-none'>
                {icon1}
                {day}
                {time}
            </div>
            <div className='m-sm-1 m-auto'>
                {icon2}
                {text}
                {number}
            </div>
          </div>
        </div>
  )
}
