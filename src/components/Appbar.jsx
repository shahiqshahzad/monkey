import React from 'react'
import { Container, Navbar,Nav,NavDropdown } from 'react-bootstrap';
import logo from '../images/logo.png';
const Appbar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#home" style={{marginBottom:"-38px", zIndex:"2"}} > <img className="logoimg" src={logo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav style={{paddingTop:"25px"}} className="me-auto textNav ">
        <Nav.Link href="#home">STORYLINE</Nav.Link>
        <Nav.Link href="#link">ROADMAP</Nav.Link>
        <Nav.Link href="#link">Q/A</Nav.Link>
        <Nav.Link href="#link">TEAM</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Appbar;
