import React, { Component } from 'react'
import {
    Card,
    Row,
    Col,
    Button
  } from "react-bootstrap";
import cookie from "react-cookies"
import app from "../images/app.png"
import NavBar from "../components/navbar"
export default class Mobile extends Component {
  render() {
    if(cookie.load('login')===undefined){
        this.props.history.push("/");
      }
    return (
        <>
        <NavBar/>
    <Row>
        <Card style={{backgroundColor:"black",width:"100%"}}>
            <Card.Body>
                <Row>
                    <Col sm={4} style={{marginLeft:"10%"}}>
                    <img class= 'img-responsive' style={{width:"100%"}} src={app}/>
                    </Col>
                    <Col style={{textAlign:"center",marginTop:"30%"}}>
                        <a href="https://deadstock.glideapp.io/">
                        <Button className="postButton" style={{width:"30%",height:"20%",fontSize:"2em"}}>See our app</Button>
                        </a>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </Row>
    </>
    )
  }
}
