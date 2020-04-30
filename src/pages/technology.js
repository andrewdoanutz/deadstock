import React, { Component } from 'react'
import {
    Card,
    Row,
    Col,
    Button
  } from "react-bootstrap";
import cookie from "react-cookies"
import NavBar from "../components/navbar"
import land2 from "../images/landing2.png"
import tech1 from "../images/tech1.jpg"
import tech2 from "../images/tech2.jpg"
import tech3 from "../images/tech3.jpg"
import tech4 from "../images/tech4.png"
import tech5 from "../images/tech5.jpg"


export default class Technology extends Component {
  render() {
    if(cookie.load('login')===undefined){
        this.props.history.push("/");
      }
    return (
        <div>
            <NavBar/>
        <Col>
            <Row>
                <Card style={{backgroundColor:"black",width:"100%"}}>
                    <img class= 'img-responsive' style={{width:"100%",height:"75%"}} src={tech1}/>
                    <div className="techOverlay">
                        Peace of Mind
                        <div style={{fontWeight:"normal",fontSize:".5em"}}>
                        Whether you’re an avid collector or buying your first luxury product, Deadstock helps bring the peace of mind you deserve. 
                        </div>
                    </div>
                </Card>
            </Row>
            <Row>
                <div className="techFiller">You work hard to buy your products. We work hard to protect them.</div>
            </Row>
            <Row>
                <Card style={{backgroundColor:"black",width:"100%"}}>
                    <img class= 'img-responsive' style={{width:"100%",height:"90%"}} src={land2}/>
                    <div className="techOverlay">
                        Secured By Blockchain
                        <div style={{fontWeight:"normal",fontSize:".5em"}}>
                        Our proprietary blockchain technology is integrated with a brand’s backend and inventory to quickly create digital identities for all our products. These digital identities are connected to the item which is then stored on our blockchain network which ensures the safety and security of your items now and forever. 
                        </div>
                    </div>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"black",width:"100%"}}>
                    <img class= 'img-responsive' style={{width:"100%",height:"90%"}} src={tech3}/>
                    <div className="techOverlay">
                        Faster Delivery with Lower Cost
                        <div style={{fontWeight:"normal",fontSize:".5em"}}>
                        Your items no longer have to go through a third party authentication service. With Deadstock, simply send your already authenticated products straight to the buyer. 
                        </div>
                    </div>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"black",width:"100%"}}>
                    <img class= 'img-responsive' style={{width:"100%",height:"80%"}} src={tech2}/>
                    <div className="techOverlay">
                        Have a deeper relationship with your items
                        <div style={{fontWeight:"normal",fontSize:".5em"}}>
                        Track the history of your items anytime, anywhere.
                        </div>
                    </div>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"black",width:"100%"}}>
                    <img class= 'img-responsive' style={{width:"100%",height:"80%"}} src={tech4}/>
                    <div className="techOverlay">
                        Build relationships with your friends, and your favorite brands
                        <div style={{fontWeight:"normal",fontSize:".5em"}}>
                        Did you know that becoming an influencer is the number one career choice in today’s society? Deadstock gives influencers the perfect platform to promote items from their favorite brands while gaining recognition from these brands. 
                        </div>
                    </div>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"black",width:"100%"}}>
                    <img class= 'img-responsive' style={{width:"100%",height:"80%"}} src={tech5}/>
                    <div className="techOverlay">
                        Protect Brand Halo
                        <div style={{fontWeight:"normal",fontSize:".5em"}}>
                        Luxury brands lost over $98B due to counterfeit goods in 2019. These counterfeit goods have caused buyers to lose trust in their favorite brands. Deadstock will help alleviate this problem by making it extremely hard to replicate and sell counterfeit goods. 
                        </div>
                    </div>
                </Card>
            </Row>
            
        </Col>
      </div>
    )
  }
}
