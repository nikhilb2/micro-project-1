// @flow

import React from 'react'
import { Navbar } from 'react-bootstrap'

const NavigationBar = (props) => {
  return (
    <div>
    <Navbar collapseOnSelect  bg="dark" variant="dark" className="borderbottom">
    <Navbar.Brand href="#home" className="dark">Feedback For Microverse project</Navbar.Brand>
    
  </Navbar>
  </div>
  )
}

export default NavigationBar
