import React, { Component } from 'react'
import {Col,Row,Form,Button} from "react-bootstrap"

import ProductLayout from "../components/productLayout"

import mp1 from "../images/mp1.jpg"
import mp2 from "../images/mp2.jpeg"
import mp3 from "../images/mp3.jpg"
import mp4 from "../images/mp4.jpg"
import mp5 from "../images/mp5.jpg"
import mp6 from "../images/mp6.jpg"
import mp7 from "../images/mp7.jpg"
import mp8 from "../images/mp8.jpeg"
import mp9 from "../images/mp9.jpeg"
import mp10 from "../images/mp10.jpeg"
import mp11 from "../images/mp11.jpg"
import mp12 from "../images/mp12.jpg"
import mp13 from "../images/mp13.jpg"
import mp14 from "../images/mp14.jpeg"
import mp15 from "../images/mp15.jpg"


let info=[{pic:mp1, title: "Jordan 6 Retro DMP 2020"},{pic:mp2, title: "Adidas Yeezy Boost v350 Linen"},{pic:mp3, title: "Jordan 1 Retro High Court Purple White"},{pic:mp4, title: "Adidas Yeezy Boost v350 Cinder"},{pic:mp5, title: "Adidas Yeezy Slide Bone"},{pic:mp6, title: "Jordan 4 Retro Pure Money 2017"},{pic:mp7, title: "Jordan 13 Retro Chinese New Year 2020"},{pic:mp8, title: "adidas Crazy 8 ADV Nice Kicks"},{pic:mp9, title: "adidas Ultra Boost X Parley Carbon (W)"},{pic:mp10, title: "adidas Ultra Boost Uncaged Black Grey Three"},{pic:mp11, title: "adidas Ultra Boost 4.0 Triple Black Gold (W)"},{pic:mp12, title: "Nike Air Max 270 Black White"},{pic:mp13, title: "Vans Sk8-Hi Supreme Diamond Plate Brown"},{pic:mp14, title: "Nike Dunk CMFT Royal"},{pic:mp15, title: "Jordan 13 Retro Reverse He Got Game (GS)"}]

export default class Marketplace extends Component {
  render() {
    return (
      <div style={{paddingTop:"2%"}}>
        <Col>
          <Row>
              <Col></Col>
              <Col sm={6}>
                  <Form.Group controlId="formBasicText">
                      <Form.Control style={{background:"#212121",borderColor:"#fdd835",borderWidth:"1px"}} type="text" placeholder="Search for people or products..." />
                  </Form.Group>
              </Col>
              <Col>
                  <Button className="marketSearchButton" type="submit">
                      Search
                  </Button>
              </Col>
          </Row>
          <Row style={{marginTop:"5%"}}>
            <ProductLayout products={[info[0],info[1],info[2]]} title="Most Wanted" />
          </Row>
          <Row>
            <ProductLayout products={[info[3],info[4],info[5]]} title="New Arrivals" />
          </Row>
          <Row>
            <ProductLayout products={[info[6],info[7],info[8]]} title="Deadstock Favorites" />
          </Row>
          <Row>
            <ProductLayout products={[info[9],info[10],info[11]]} title="Athleisure" />
          </Row>
          <Row>
            <ProductLayout products={[info[12],info[13],info[14]]} title="Trending" />
          </Row>
        </Col>
      </div>
    )
  }
}
