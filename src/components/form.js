import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'

const NavigationBar = (props) => {
return (
  <div>
    <Form>
    <Form.Group controlId="formEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control size="lg" type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="formName">
      <Form.Label>Name</Form.Label>
      <Form.Control size="lg" type="text"  placeholder="Name" />
    </Form.Group>
    <Form.Group controlId="Form.ControlSelect1">
    <Form.Label>Rate your experience</Form.Label>
    <Form.Control  size="lg"  as="select">
      <option>Very bad</option>
      <option>Not good</option>
      <option selected>Good</option>
      <option>Very Good</option>
      <option>Excellent</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="Form.ControlTextarea1">
    <Form.Label>Any other comment</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
    <Form.Group controlId="formSubChecbox">
      <Form.Check  type="checkbox" label="Subscribe to newletter" />
    </Form.Group>
    <Button variant="primary" type="submit" className="float-right">
      Submit
    </Button>
  </Form>
  </div>
)
}

export default NavigationBar
