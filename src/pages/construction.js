import React, { Component } from 'react'
import {Col,Row} from "react-bootstrap"
import cookie from "react-cookies"
import NavBar from "../components/navbar"

import constr from "../images/construction.png"

export default class Construction extends Component {
  render() {
    if(cookie.load('login')===undefined){
      this.props.history.push("/");
    }
    return (
      <>
      <NavBar/>
      <Col>
        <Row>
            <Col>
                <div style={{textAlign:"center",color:"white",fontSize:"xx-large",marginTop:"5%"}}>This Page is Still Under Construction</div>
            </Col>
        </Row>
        <Row>
            <Col></Col>
            <Col>
                <img style={{width:"100%",marginTop:"10%"}} src={constr}/>
            </Col>
            <Col></Col>
        </Row>
      </Col>
      </>
    )
  }
}
