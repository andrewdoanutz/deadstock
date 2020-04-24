import React, { Component } from 'react'
import {Card,Button,Form,Col,Row} from "react-bootstrap"
import cookie from "react-cookies"

export default class MakeAccount extends Component {
  render() {
    if(cookie.load('login')===undefined){
      this.props.history.push("/");
    }
    return (
      <>
        <Row>
          <Col></Col>
          <Col sm={6} style={{marginTop:"5%"}}>
            
            <Card style={{backgroundColor:"#212121",color:"white"}}>
              <Card.Title style={{margin:"4%",marginBottom:"0",fontWeight:"bold",letterSpacing:".05em",fontSize:"1.5em",textAlign:"center"}}>Create Account</Card.Title>
              <Card.Body style={{marginLeft:"2%",marginRight:"2%"}}>
                    <Form >
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter username" />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="password" placeholder="Enter email" />
                      </Form.Group>
                      <Form.Group controlId="formBasicPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="phone" placeholder="Enter phone number" />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <div style={{textAlign:"center",marginTop:"8%"}}>
                        <Button className="accountButton" type="submit">
                          Submit
                        </Button>
                      </div>
                    </Form>
              </Card.Body>
            </Card>
            <div style={{textAlign:"center", marginTop:"10%"}}>
              <a className="accountSignup" href="\account">
                Log In
              </a>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </>
    )
  }
}
