import React, { Component } from 'react'
import {Col,Row} from "react-bootstrap"

import BlogBlock from "../components/blogBlock"

export default class BlogLayout1 extends Component {
    render() {
        return (
        <Row>
            <Col>
                <BlogBlock pic={this.props.info1.pic} title={this.props.info1.title} />
            </Col>
        </Row>
        )
    }
}
