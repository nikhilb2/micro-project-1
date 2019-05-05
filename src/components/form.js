import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap'

class InputForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:null,
      comment:null,
      submitPress:false
    }
  }
  render() {
    const { name, comment, submitPress } = this.state
    console.log(this.state);
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
          <Form.Control size="lg" type="text"  placeholder="Name" onChange={(e)=>this.setState({name:e.target.value})} />
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
        <Form.Control as="textarea" rows="3" onChange={(e)=>this.setState({comment:e.target.value})}/>
      </Form.Group>
        <Form.Group controlId="formSubChecbox">
          <Form.Check  type="checkbox" label="Subscribe to newletter" />
        </Form.Group>
        {submitPress
          ? null
          : <div>
              <Button variant="primary" type="submit" className="float-right" onClick={(e)=>{
                e.preventDefault()
                this.setState({submitPress:true})
              }}>
                Submit
              </Button>
            </div>
        }

      </Form>

        {submitPress
          ? (<div>
                  <Card>
        <Card.Header>Thanks for your response, {name}</Card.Header>
        <Card.Body>
          <Card.Title>Your comment</Card.Title>
          <Card.Text>
           {comment}
          </Card.Text>
          <Button onClick={(e)=>{
                e.preventDefault()
                this.setState({submitPress:false})
              }}>Ok</Button>
            </Card.Body>
          </Card>
            </div>)
          : null
        }
      </div>
    )
  }

}

export default InputForm
