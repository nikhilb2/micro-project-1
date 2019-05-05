import React, { Component } from 'react';
import NavigationBar from './navbar'
import Form from './form'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
const HomePage = (props) => {
return (
  <div>

  <NavigationBar />
  <Jumbotron>
  <h1>Hello, Students</h1>
  <p>
    This is a simple survey form for your microverse project, please fill out the below form.
  </p>

</Jumbotron>
  <Container>
  <Row>
    <Col md={{ span: 6, offset: 2 }} style={{paddingTop:'40px'}}>
    <Form />
    </Col>
  </Row>

  </Container>
  </div>
)
}

export default HomePage
