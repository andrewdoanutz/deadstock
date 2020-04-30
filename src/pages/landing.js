

import {
  Button,
  Card,
  Row,
  Col,
  Accordion,
  useAccordionToggle
} from "react-bootstrap";
import cookie from "react-cookies"
import React, { Component } from 'react'
import NavBar from "../components/navbar"

import land1 from "../images/landing1.jpg"
import land3 from "../images/landing3.png"

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <Button
        className="postButton"
        onClick={decoratedOnClick}
      >
        {children}
      </Button>
    );
  }

export default class LandingPage extends Component {
  render() {
    if(cookie.load('login')===undefined){
        this.props.history.push("/");
      }
    return (
      <div>
          <NavBar/>
        <Col>
            <Row>
                <Card style={{backgroundColor:"black"}}>
                    <img class= 'img-responsive' style={{width:"100%",height:"90%"}} src={land1}/>
                    <Card.Body>
                        <div className="landingOverlay">Discover the easiest, most secure platform to buy and sell luxury goods</div>
                        <div className="landingSubOverlay">
                            <a href="/technology">
                                <Button className="postButton">How It Works</Button>
                            </a>
                        </div>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"black",color:"white",textAlign:"center"}}>
                    <img class= 'img-responsive' style={{width:"100%",height:"90%"}} src={land3}/>
                </Card>
                <Col>
                    <Accordion style={{textAlign:"center"}}>
                        <CustomToggle eventKey="0">See More</CustomToggle>
                        <Accordion.Collapse eventKey="0">
                            <div>
                                <Card style={{backgroundColor:"#212121",textAlign:"left",marginTop:"2%",color:"white"}}>
                                    <Card.Title style={{margin:"2%",color:"#fdd835",fontWeight:"bold",letterSpacing:".05em"}}>
                                        Kenneth Zhang
                                    </Card.Title>
                                    <Card.Body>
                                    A 4th year Economics and Technology Management student at UCSB, Kenneth has spent the last five years learning the ins and outs of the fashion industry at various companies such as Air Jordan and Sneakerhead while also building his own e-commerce clothing business from scratch. An avid sneaker and apparel collector, Kenneth has pushed to solve problems that the industry constantly faces and the idea for Deadstock was born due to the growing number of counterfeit items and the problem it poses for luxury brands and consumers. In his free time, Kenneth loves to play and watch sports (especially basketball), discover and mix new music, as well as traveling to new countries. 
                                    </Card.Body>
                                </Card>
                                <Card style={{backgroundColor:"#212121",textAlign:"left",marginTop:"2%",color:"white"}}>
                                    <Card.Title style={{margin:"2%",color:"#fdd835",fontWeight:"bold",letterSpacing:".05em"}}>
                                        Vista Darabian
                                    </Card.Title>
                                    <Card.Body>
                                    Vista is a 4th year Financial Mathematics & Statistics major at the University of California, Santa Barbara. Her interest for sneaker and streetwear culture developed when she interned at Adidas as a Demand Planner on the Advanced Analytics team. There, she grew passionate about the mostly uncharted cross section of technology and fashion, which lead her to getting involved with Deadstock. In her free time, she enjoys listening to podcasts, rock climbing, and drinking LaCroix.
                                    </Card.Body>
                                </Card>
                                <Card style={{backgroundColor:"#212121",textAlign:"left",marginTop:"2%",color:"white"}}>
                                    <Card.Title style={{margin:"2%",color:"#fdd835",fontWeight:"bold",letterSpacing:".05em"}}>
                                        Andrew Luu
                                    </Card.Title>
                                    <Card.Body>
                                    Andrew is currently a 4th year studying Economics with a background in finance and business. He became interested in the streetwear and luxury fashion industry because growing up, he always wanted to start his own collection of hype products but could never afford to. In his free time, he enjoys going to the gym, finding new music, and baking.
                                    </Card.Body>
                                </Card>
                                <Card style={{backgroundColor:"#212121",textAlign:"left",marginTop:"2%",color:"white"}}>
                                    <Card.Title style={{margin:"2%",color:"#fdd835",fontWeight:"bold",letterSpacing:".05em"}}>
                                        Andrew Chhur
                                    </Card.Title>
                                    <Card.Body>
                                    Andrew is currently a fourth year Economics & Accounting major with experience in both public and private accounting working at firms such as Ernst & Young. After one of his best friends introduced him to the world of streetwear, he developed a deep passion and began collecting pieces that he felt genuinely expressed his personality. By working with Deadstock, Andrew has been able to combine both his professional strengths along with his passions. In his free time, he enjoys basketball, tennis, and stargazing.
                                    </Card.Body>
                                </Card>
                            </div>
                        </Accordion.Collapse>
                    </Accordion>
                </Col>
            </Row>
            <Row>
                <Card style={{backgroundColor:"black",color:"white",textAlign:"center",width:"100%",paddingTop:"25%",paddingBottom:"25%"}}>
                    <Card.Body>
                        <Row>
                            <Col>
                            <div style={{fontSize:"3em",fontWeight:"bold",color:"#fdd835"}}>Contact Us</div>
                            </Col>
                            <Col>
                            <div style={{fontSize:"1.5em",paddingTop:"2.5%"}}>general@deadstockmp.com</div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <a className="credit" href="https://www.linkedin.com/in/andrewadoan/">
                    <div>Website by Andrew Doan</div>
                </a>
            </Row>
        </Col>
      </div>
    )
  }
}
