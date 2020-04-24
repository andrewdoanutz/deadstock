import React, { Component } from 'react'
import {Col,Row,Card} from "react-bootstrap"

import ProductBlock from "../components/productBlock"

export default class ProductLayout extends Component {
    constructor(props){
        super(props)
        this.state={
            products:this.props.products,
            title:this.props.title
        }
    }
  render() {
    return (
      <Card style={{backgroundColor:"#212121", margin:"2%"}}>
        <Card.Title style={{margin:"2%",color:"white",fontWeight:"bold",letterSpacing:".05em"}}>
            <Row>
                <Col>
                    <div style={{fontSize:"xx-large"}}>{this.state.title}</div>
                </Col>
             
                <Col sm={2} style={{textAlign:"right"}}>
                    <a className="productLayoutLink" href="\underConstruction">
                        See More...
                    </a>
                </Col>
            </Row>
        </Card.Title>
        <Card.Body>
            <Col>
                <Row>
                    {this.state.products.map((prod)=>{
                        return(
                            <Col>
                                <ProductBlock pic={prod.pic} title={prod.title} />
                            </Col>
                        )
                    })}
                </Row>
            </Col>
        </Card.Body>
      </Card>
    )
  }
}
