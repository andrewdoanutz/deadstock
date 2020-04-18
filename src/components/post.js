import React, { Component } from 'react'
import {Card,Col,Row} from "react-bootstrap"
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
            liked:false
        }
    }
    onStarClickCustomIcon(nextValue, prevValue, name) {
        console.log(this.state.liked)
        this.setState({liked:!this.state.liked});
        }
  render() {
    return (
      <div className="post">
        <Card >
            <Card.Title>{this.state.username}</Card.Title>
            <Card.Img src={this.state.pic} />
            <Card.Body>
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
                        {this.state.desc}
                        {"View "+this.state.comments+" comments"}
                    </Col>
                </Card.Text>
            </Card.Body>
            <Card.Title>Add a comment...</Card.Title>
        </Card>
      </div>
    )
  }
}
