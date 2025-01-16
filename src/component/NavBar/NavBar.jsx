import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './NavBar.css'
import ButtonCommon from '../ButtonCommon/ButtonCommon'
import { useRef } from 'react'


export default function NavBar({logo , infoLogo , dropdown, link , items} ) {

  // const nav = useRef(null)
  // window.addEventListener("scroll" , ()=>{
  //   if(window.scrollY>20){
  //     nav.current.style.height="calc( 100vh - 90px )"
  //   }
  //   else{
  //     nav.current.style.height="calc( 100vh - 135px )"
  //   }
  // })



  return (

    <Navbar collapseOnSelect expand="lg" className=" bg-white main-padding position-fixed z-3 w-100 ">
    {/* <Container fluid> */}


      <Navbar.Brand href="#home" >
        <img src={logo} alt={infoLogo}></img>
       </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ms-sm-auto me-sm-2 border-0 p-0' />

      <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="ms-auto text-black " >

        {items?.map((el , index) =>{
          return(
          <Nav.Link key={index} href= {`#${el?.id}`} className ='font-common text-black fw-semibold'>{el.name}</Nav.Link>
          )
        })}
        
          <NavDropdown title={dropdown.title} id="collapsible-nav-dropdown" className ='font-common text-black fw-semibold'>
            <NavDropdown.Item href="#action/3.1">{dropdown?.option1}</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            {dropdown?.option2}
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">{dropdown?.option3}</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href= {`${link}}`} className ='font-common text-black fw-semibold'>{link}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <ButtonCommon BtnDesc="Make An Appointment " />
    {/* </Container> */}
  </Navbar>

  )
}
