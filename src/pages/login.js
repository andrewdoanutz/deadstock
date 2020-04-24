import React, { Component } from 'react'
import {Col,Row,Button,Form} from "react-bootstrap"
import cookie from "react-cookies"

export default class Login extends Component {
    componentDidMount(){
        cookie.remove('login')
    }
    constructor(props){
        super(props)
        this.input=React.createRef()
    }
    giveCookie(){
        if(this.input.current.value!=="kz"){
            return
        }
        cookie.save(
            'login',
            true,
            {
              path: '/',
            }
          )
        this.props.history.push("/newsfeed");
    }
  render() {
    return (
        <div style={{paddingTop:"16%"}}>
            <Col>
                <Row>
                    <Col></Col>
                    <Col>
                        <Form.Group controlId="formBasicText">
                            <Form.Control ref={this.input} style={{background:"#212121",borderColor:"#fdd835",borderWidth:"1px",color:"white"}} type="text" placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <div style={{textAlign:"center",paddingTop:"10%"}}>
                            <Button className="postButton" onClick={this.giveCookie.bind(this)}>See the Future</Button>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Col>
        </div>
    )
  }
}
