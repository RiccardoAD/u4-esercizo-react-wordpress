import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import logo from '../assest/img/logo.svg';
 export const NavBar = () => {
    const [activeLink, setActiveLink]= useState('home')
  
    const onUpdatActiveLink =(value)=>{
      setActiveLink(value)
    }
  return (
    <Navbar expand="lg" id='nav' >
      <Container className='mt-2'>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span> </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdatActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills"className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdatActiveLink('skills')} >About</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'poject' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdatActiveLink('project')}>Contact</Nav.Link>
           
          </Nav>
          <span className='navbar-text'>
            <button className='vvd' onClick={()=> console.log('connect')}><span>let's connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

