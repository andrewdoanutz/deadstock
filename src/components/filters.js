import React, { Component } from 'react'
import {Card,Accordion,Button,Form} from "react-bootstrap"

export default class Filters extends Component {
    constructor(props){
        super(props)
        let list = Object.entries(this.props.tags);
        list.sort(function(a,b){return a[0].localeCompare(b[0]);});
        this.state={
            tags:list
        }
    }
    render() {
        return (
        <>
            <Accordion>
                <Card style={{backgroundColor:"#212121"}}>
                    <Card.Title style={{margin:"3%",color:"white",fontWeight:"bold",letterSpacing:".05em",fontSize:"1.5em"}}>
                        Filters
                    </Card.Title>
                </Card>
                <Card style={{backgroundColor:"#212121",borderWidth:"0",borderTopWidth:"1px",borderColor:"#fdd835"}}>
                    <Card.Header style={{backgroundColor:"#212121"}} >
                    <Accordion.Toggle className="filterButton" as={Button} variant="link" eventKey="0">
                        Brand
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Form>
                            {this.state.tags.map((tag) => {
                                return(
                                <div key={tag[0]} className="mb-3">
                                    <Form.Check style={{color:"white"}}
                                        type={"checkbox"}
                                        label={tag[0]+" ("+tag[1]+")"}
                                    />
                                </div>
                                )
                            })}
                            </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card style={{backgroundColor:"#212121",borderWidth:"0"}}>
                    <Card.Header style={{backgroundColor:"#212121"}} >
                    <Accordion.Toggle className="filterButton" as={Button} variant="link" eventKey="1">
                        Department
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Form>
                                {["Tops","Bottoms","Shoes","Bags","Accessories"].map((tag) => {
                                    return(
                                    <div key={tag} className="mb-3">
                                        <Form.Check  style={{color:"white"}}
                                            type={"checkbox"}
                                            label={tag}
                                        />
                                    </div>
                                    )
                                })}
                            </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
        )
    }
}
