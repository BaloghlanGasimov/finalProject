import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import main_logo_light from '../assets/img/main-logo-light.png'
import { LinkContainer } from 'react-router-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';

import { useWishlist } from "react-use-wishlist";
import { useCart } from "react-use-cart";


// import langdata from '../data/langData'
import mydata from '../data/data'
import { LangDataContext } from '../context/LangDataContext';
import { LangContext } from '../context/LangContext';

const Header = (props) => {
  const { items } = useCart();
  const { totalWishlistItems } = useWishlist();

  const [mode,setMode] = useContext(ThemeContext);
  const [langData,setLangData] = useContext(LangDataContext);
  const [lang,setLang] = useContext(LangContext);
  const [mylang,setMylang] = useState(lang=="az"? langData.az: langData.en);
  // const [mylang,setMylang] = useState(lang=="az"? langData.en: langData.az);
  // const [mylang,setMylang] = useState(langData.az);
  
  console.log(lang);


  
  // lang=="az"? setMylang(langData.en): setMylang(langData.az   )

  // if(lang=="az"){
  //     setMylang(langData.az)
  // }else{
  //   setMylang(langData.en)
  // }

  // const [mylangMode,setMylangMode] = useState(lang);
  // const [yoxlama,setYoxlama] = useState("az");
  // useEffect(() => {
    if(localStorage.getItem("login")==null){
      localStorage.setItem("login","Sign In")
    }
    if(localStorage.getItem("admin")==null){
      localStorage.setItem("admin",0)
    }
  // }, [])

  useEffect(()=>{
    if(localStorage.getItem('colorMode')==null){
      localStorage.setItem('colorMode','light')
    }
    if(lang=="az"){
      setMylang(langData.az)
      localStorage.setItem('langMode','az')
  }else{
    setMylang(langData.en)
    localStorage.setItem('langMode','en')
  }


  if(localStorage.getItem('langMode')==null){
      localStorage.setItem('langMode','en')
  }
  },lang)
    
  const modeFunc = () =>{
    if(mode==="light"){
      setMode("dark");
      localStorage.setItem('colorMode','dark');
    }else{
      setMode("light");
      localStorage.setItem('colorMode','light');
    }
  }
  
  // var tempNamespace = {};
  // var myString = "myVarProperty";

  // tempNamespace[myString] = 5;

  // const [mylang,setMylang] = useState({lang=="az"?mylangMode.az:mylangMode.en})


  console.log(mylang);

  return (
    <div>
        <Navbar bg="" expand="lg" className={`mb-3 ${props.className}`}>
          <Container>
          <LinkContainer to='/'>
        <Navbar.Brand><img width={150} src={main_logo_light} alt="brand-logo" /></Navbar.Brand>
        </LinkContainer>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                <LinkContainer to='/'>
                  <Nav.Link>{mylang.header.first}</Nav.Link>               
            </LinkContainer>
            <LinkContainer to='/shop'>
                {/* <Nav.Link>{langData.az.header.second}</Nav.Link> */}
                <Nav.Link>{mylang.header.second}</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
                <Nav.Link>{mylang.header.third}</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
                <Nav.Link>{mylang.header.fourth}</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/blog'>
                <Nav.Link>{mylang.header.fifth}</Nav.Link>
            </LinkContainer>
                </Nav>
            <Dropdown className="langDrop">
      <Dropdown.Toggle  className="langBtn" variant="outline-light" id="dropdown-basic">
        ENGLISH
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item onClick={()=>{setLang("en")}}>English</Dropdown.Item>
        <Dropdown.Item onClick={()=>{setLang("az")}}>Azerbaijan</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Russian</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      <Button variant="outline-light" className='navbar-icon-buttons lightDark' onClick={modeFunc} >
        {/* {localStorage.getItem('colorMode')} */}
        {/* {localStorage.getItem('colorMode').charAt(0).toUpperCase()+localStorage.getItem('colorMode').slice(1)} */}

        Light/Dark
        </Button>

                {/* <Button  variant="outline-light" className='navbar-icon-buttons'><i className="fa-solid fa-magnifying-glass"></i></Button> */}
                
                {localStorage.getItem('login')=="Sign In" 
                ? 
                <div className='userDrop'>
                <LinkContainer to='/login'>
                <Button className="signIn" variant="outline-light" className='navbar-icon-buttons'>{mylang.header.sign}</Button> 
                </LinkContainer>
                </div>
                :
                <div  className="dropdown userDrop">
                <button className="bg-transparent btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-user"></i> {localStorage.getItem("login")}
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">View</a></li>
                <LinkContainer to='/login'>
                  <li><a className="dropdown-item" href="#">Change User</a></li>
                </LinkContainer>
                  <li><a className="dropdown-item" onClick={()=>{ 
                    localStorage.setItem('login','Sign In');
                    window.location.reload(true)
                    }} href="#">Log Out</a></li>
                
                  {localStorage.getItem("admin")==0?<></>:
                  <>
                   <LinkContainer to='/admin'>
                   <li className='navbar-icon-buttons dropdown-item'>Admin</li>
                   </LinkContainer>
                   <LinkContainer to='/dashboard'>
                   <li  className='navbar-icon-buttons dropdown-item'>Dashboard</li>
                   </LinkContainer>
                   </>
                  }
               

                </ul>
                
              </div>
              
                 }
                 

                {/* ------- */}
                {/* <LinkContainer to='/login'> */}
                {/* <Button variant="outline-light" className='navbar-icon-buttons'>{localStorage.getItem("login")}</Button> */}

                  
                  {/* {localStorage.getItem('login')=="Sign In" ? <p>nevare</p> : <p>yoxxxx</p>} */}
                {/* </LinkContainer> */}
                {/* ------- */}
                
               <LinkContainer to='/cart'>
               <div className="shopCart">
               <Button variant="outline-light" className='navbar-icon-buttons'><i className="fa-solid fa-cart-shopping"></i></Button>
               <div className="cart-count">{items.length}</div>
               </div>
               </LinkContainer>
               <LinkContainer to='/wishlist'>
               <div className="wishlistCart">
               <Button variant="outline-light" className='navbar-icon-buttons'><i className="fa-regular fa-heart"></i></Button>
               <div className="wishlist-count">{totalWishlistItems}</div>
               </div>
               </LinkContainer>
              
               

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </div>
  )
}

export default Header