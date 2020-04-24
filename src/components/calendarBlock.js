import React, { Component } from 'react'
import {Col,Row} from "react-bootstrap"

export default class CalendarBlock extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
        this.state={
            pic:this.props.pic,
            name:this.props.name,
            date:this.props.date
        }
    }
    render() {
        return (
        <div>
            <Row>
                <Col>
                    <a href="/underConstruction">
                        <img className="calendarBlock" src={this.state.pic}/>
                        <div className="calendarBlockOverlay">{this.state.date+": "+this.state.name}</div>
                    </a>
                </Col>
            </Row>
        </div>
        )
    }
}
