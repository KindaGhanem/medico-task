import './ListFooter.css'

export default function ListFooter({h5 ,footerli1 ,footerli2 , footerli3 , footerli4 , footerli5 }) {
  return (
<div>
    <h5 className='fw-semibold footer-title'>{h5}</h5>
    <ul className='list-foooter ps-0'>
        <li>{footerli1}</li>
        <li>{footerli2}</li>
        <li>{footerli3}</li>
        <li>{footerli4}</li>
        <li>{footerli5}</li>
    </ul>
</div>
  )
}
