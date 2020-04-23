import React, { Component } from 'react'
import {Col,Row} from "react-bootstrap"

import BlogBlock from "../components/blogBlock"

export default class BlogLayout2 extends Component {
    render() {
        return (
        <Row>
            <Col>
                <Row>
                    <BlogBlock pic={this.props.info2.pic} title={this.props.info2.title} />
                </Row>
                <Row>
                    <BlogBlock pic={this.props.info3.pic} title={this.props.info3.title} />
                </Row>
                <Row>
                    <BlogBlock pic={this.props.info4.pic} title={this.props.info4.title} />
                </Row>
                <Row>
                    <BlogBlock pic={this.props.info5.pic} title={this.props.info5.title} />
                </Row>
            </Col>
            <Col sm={8}>
                <BlogBlock pic={this.props.info1.pic} title={this.props.info1.title} />
            </Col>
        </Row>
        )
    }
}
