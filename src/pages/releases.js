import React, { Component } from 'react'
import {Col,Row} from "react-bootstrap"
import cookie from "react-cookies"
import CalendarBlock from "../components/calendarBlock"

import cal1 from "../images/calendar1.png"
import cal2 from "../images/calendar2.png"
import cal3 from "../images/calendar3.png"
import cal4 from "../images/calendar4.png"
import cal5 from "../images/calendar5.png"
import cal6 from "../images/calendar6.png"
import cal7 from "../images/calendar7.png"
import cal8 from "../images/calendar8.png"
import cal9 from "../images/calendar9.png"


let info=[{pic:cal9,date:"4/24/2020",name:"New Balance x Levi's M1300LV"},{pic:cal1,date:"4/24/2020",name:"Adidas Consortium x Human Made Superstar 80s"},{pic:cal2,date:"4/18/2020",name:"Adidas Yeezy Boost 350 V2 'Linen'"},{pic:cal3,date:"4/18/2020",name:"Air Jordan 6 Retro SE 'DMP'"},{pic:cal4,date:"4/16/2020",name:"Adidas Yeezy Slides"},{pic:cal5,date:"4/11/2020",name:"Air Jordan 1 Retro High OG 'Court Purple'"},{pic:cal6,date:"TBD",name:"Nike Air Zoom Spidron Cage 2"},{pic:cal7,date:"4/11/2020",name:"Air Jordan 1 Retro High OG 'Court Purple'"},{pic:cal8,date:"4/11/2020",name:"New Balance x THIS\nNEVERTHAT ML827KTV"}]
export default class Releases extends Component {
  render() {
    if(cookie.load('login')===undefined){
      this.props.history.push("/");
    }
    return (
      <div style={{margin:"2%"}}>
      <Row>
        <Col>
          <Row>
            <CalendarBlock pic={info[0].pic} date={info[0].date} name={info[0].name}/>
          </Row>
          <Row>
            <CalendarBlock pic={info[3].pic} date={info[3].date} name={info[3].name}/>
          </Row>
          <Row>
            <CalendarBlock pic={info[6].pic} date={info[6].date} name={info[6].name}/>
          </Row>
        </Col>
        <Col>
          <Row>
            <CalendarBlock pic={info[1].pic} date={info[1].date} name={info[1].name}/>
          </Row>
          <Row>
            <CalendarBlock pic={info[4].pic} date={info[4].date} name={info[4].name}/>
          </Row>
          <Row>
            <CalendarBlock pic={info[7].pic} date={info[7].date} name={info[7].name}/>
          </Row>
        </Col>
        <Col>
          <Row>
            <CalendarBlock pic={info[2].pic} date={info[2].date} name={info[2].name}/>
          </Row>
          <Row>
            <CalendarBlock pic={info[5].pic} date={info[5].date} name={info[5].name}/>
          </Row>
          <Row>
            <CalendarBlock pic={info[8].pic} date={info[8].date} name={info[8].name}/>
          </Row>
        </Col>
      </Row>
      </div>
    )
  }
}
