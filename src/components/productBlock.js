import React, { Component } from 'react'
import {Col,Row} from "react-bootstrap"

export default class ProductBlock extends Component {

    constructor(props){
        super(props)
        this.state={
            pic:this.props.pic,
            title:this.props.title
        }
    }

    render() {
        return (
        <div>
            <Row>
                <Col>
                    <a href="/underConstruction">
                        <img className="productBlockImg" src={this.state.pic}/>
                    </a>
                    <div className="productBlockTitle">{this.state.title}</div>
                </Col>
            </Row>
        </div>
        )
    }
}
