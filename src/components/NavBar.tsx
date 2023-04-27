import React from 'react';
import { useState , useEffect } from 'react';
import { Container } from "react-bootstrap"
import { Navbar } from "react-bootstrap"
import { Nav } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/Github.png';

export const NavBar=() =>{
    const[ActiveLink, setActiveLink] = useState('home');
    const[scrolled , setscrolled] =useState(false);
    useEffect( ()=>{
        const onScroll = ()=>{
         if(window.scrollY > 50){
            setscrolled(true);
         }
         else{
            setscrolled(false);

         }

        }
        window.addEventListener("scroll",onScroll);

        return()=>window.removeEventListener("scroll",onScroll);

    },[])
    
    const onUpdateActiveLink = (value: React.SetStateAction<string>) => {
        setActiveLink(value);
      }

return(
    <>
<Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
    <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo"></img> 

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="Navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <NavbarCollapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={ActiveLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
                <Nav.Link href="#Skills" className={ActiveLink === 'Skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Skills')} >Skills</Nav.Link>
                <Nav.Link href="#Projects" className={ActiveLink === 'Projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icons">
                    <a href="#"><img src={navIcon1} alt="" /></a>
                    <a href="#"><img src={navIcon2} alt="" /></a>
                    <a href="#"><img src={navIcon3} alt="" /></a>
                </div>
                <button className="vvd" onClick={() => console.log('connect')}>
                    <span>Let's Connect</span>
                </button>
            </span>
        </NavbarCollapse>
    </Container>
</Navbar>
</>
)

}