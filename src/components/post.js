import React, { Component } from 'react'
import {Button,Card} from "react-bootstrap"

export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state={
            username:this.props.username,
            pic:this.props.pic,
            desc:this.props.desc,
            tags:this.props.tags,
            likes:this.props.likes,
            comments:this.props.comments
        }
    }

  render() {
    return (
      <div className="post">
        <Card >
            <Card.Title>{this.state.username}</Card.Title>
            <Card.Img src={this.state.pic} />
            <Card.Body>
                <Card.Text>
                    <div>
                        <Button variant="primary">Like</Button>{this.state.likes+" likes"} 
                        {this.state.desc}
                        {"View "+this.state.comments+" comments"}
                    </div>
                </Card.Text>
            </Card.Body>
            <Card.Title>Add a comment...</Card.Title>
        </Card>
      </div>
    )
  }
}
