import React, { Component } from 'react'
import {Col,Row} from "react-bootstrap"
import cookie from "react-cookies"

import BlogLayout1 from "../components/blogLayout1"
import BlogLayout2 from "../components/blogLayout2"

import blog1 from "../images/blog1.jpg"
import blog2 from "../images/blog2.jpg"
import blog3 from "../images/blog3.jpg"
import blog4 from "../images/blog4.jpg"
import blog5 from "../images/blog5.jpg"
import blog6 from "../images/blog6.jpg"

let info=[{pic:blog1,title:"The Story and Food of Matty Matheson"},{pic:blog2,title:"You Don't Want to Miss This Supreme Drop"},{pic:blog3,title:"Catch Hamilton's Khaki Field in Titanium"},{pic:blog4,title:"DIVINITIES Releases New Nostalgia Drop"},{pic:blog5,title:"CDG x Converse Returns With New Prints"},{pic:blog6,title:"Check out these RAW EMOTIONS rugs"}]

export default class Blog extends Component {
  render() {
    if(cookie.load('login')===undefined){
      this.props.history.push("/");
    }
    return (
      <Col style={{margin:"1%",textAlign:"center"}}>
        <Row style={{textAlign:"center"}}>
          <BlogLayout1 info1={info[0]}/>
        </Row>
        <Row style={{textAlign:"center"}}>
          <BlogLayout2 info1={info[3]} info2={info[4]} info3={info[5]} info4={info[1]} info5={info[2]}  />
        </Row>
      </Col>
    )
  }
}
