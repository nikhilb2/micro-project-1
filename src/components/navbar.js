// @flow

import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const NavigationBar = (props) => {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" variant="light" className="borderbottom">
    <Navbar.Brand href="#home" className="dark">Navbar</Navbar.Brand>
    <Nav className="ml-auto text-light">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='collapseColor' />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav.Link href="#home" className="dark">HOME</Nav.Link>
      <Nav.Link href="#features" className="dark">FEATURES</Nav.Link>
      <Nav.Link href="#pricing" className="dark">PRICING</Nav.Link>
    </Navbar.Collapse>
    </Nav>
  </Navbar>
  </div>
  )
}

export default NavigationBar
