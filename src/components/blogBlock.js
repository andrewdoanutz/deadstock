import React, { Component } from 'react'
import {Col,Row} from "react-bootstrap"

export default class BlogBlock extends Component {
    constructor(props){
        super(props)
        this.state={
            pic:this.props.pic,
            title:this.props.title
        }
    }
    render() {
        return (
        <div style={{marginBottom:"3%"}}>
            <Row>
                <Col>
                    <a href="/underConstruction">
                        <img className="blogBlockImg" src={this.state.pic}/>
                    </a>
                    <div className="blogBlockOverlay">{this.state.title}</div>
                </Col>
            </Row>
        </div>
        )
    }
}
