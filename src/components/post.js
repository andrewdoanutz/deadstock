import React, { Component } from 'react'
import {Card,Col,Row,Form,Button} from "react-bootstrap"
import StarRatingComponent from "react-star-rating-component"


export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state={
            username:this.props.username,
            pic:this.props.pic,
            desc:this.props.desc,
            tags:this.props.tags,
            likes:this.props.likes,
            comments:this.props.comments,
            liked:false,
        }
    }
    onStarClickCustomIcon(nextValue, prevValue, name) {
        console.log(this.state.liked)
        this.setState({
            liked:!this.state.liked,
            likes: this.state.liked ? this.state.likes-1 : this.state.likes+1
        });
        }
  render() {
    return (
      <div className="post">
        <Card style={{backgroundColor:"#212121"}}>
            <Card.Title style={{margin:"2%",color:"white",fontWeight:"bold",letterSpacing:".05em"}}>{this.state.username}</Card.Title>
            <Card.Img src={this.state.pic} />
            <Card.Body style={{margin:"1%",color:"white"}}>
                <Card.Text>
                    <Col>
                    <Row>
                        <StarRatingComponent
                            name="app3"
                            starCount={1}
                            value={()=>{
                                if(this.state.liked===true){
                                    return 1
                                } else{
                                    return 0
                                }
                            }}
                            onStarClick={this.onStarClickCustomIcon.bind(this)}
                            starColor="fdd835"
                            renderStarIcon={() => {
                                if(!this.state.liked){
                                    return <div>🤍</div>
                                } else {
                                    return <div>💛</div>
                                }
                            }} />
                            {this.state.likes+" likes"} 
                        </Row>
                        <Row>
                            <div>
                                <span style={{color:"white",fontWeight:"bold",letterSpacing:".05em"}}>
                                {this.state.username+" "}
                                </span>
                                <span>
                                {this.state.desc}
                                </span>
                            </div>
                            
                        </Row>
                        <Row style={{color:"#9e9e9e"}}>
                            {"View "+this.state.comments+" comments"}
                        </Row>
                    </Col>
                </Card.Text>
            </Card.Body>
            <Card.Title>
                <Col>
                <Form>
                    <Row>
                        <Col sm={10}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control style={{background:"#212121",borderColor:"black",borderWidth:"2px"}} type="text" placeholder="Add a comment..." />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button className="postButton" type="submit">
                                Post
                            </Button>
                        </Col>
                    </Row>
                </Form>
                </Col>
            </Card.Title>
        </Card>
      </div>
    )
  }
}
