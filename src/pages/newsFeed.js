import React, { Component } from 'react'
import {Col,Row} from "react-bootstrap"
import Post from "../components/post"
import Filters from "../components/filters"

import fit1 from "../images/fit1.jpg"
import fit2 from "../images/fit2.jpg"
import fit3 from "../images/fit3.jpg"
import fit4 from "../images/fit4.jpg"
import fit5 from "../images/fit5.jpg"

var info=[
  {username:"coolkid21",pic:fit1,desc:"Cavempt sweater and Nike Blazers",tags:["Nike","Cavempt"],likes:52,comments:3},
  {username:"2cool4school",pic:fit2,desc:"Vintage Nike shirt, Dickies, ACW Airforce 1",tags:["Nike","Dickies","A-Cold-Wall"],likes:102,comments:13},
  {username:"hypehype", pic:fit3,desc:"Calvin Klein hat, Nike x Sacai Blazers",tags:["Nike","Calvin Klein","Sacai"],likes:52,comments:3},
  {username:"cactus_mack", pic:fit4,desc:"Hoodie - 2001 Bape x Neighborhood, Shoes - Jordan 1 UNC High, Bag - Rick Owens, DRKSHDW Tote",tags:["Nike","Bape","Neighborhood","Air Jordan","Rick Owens", "DRKSHDW"],likes:203,comments:34},
  {username:"bakyardboi", pic:fit5,desc:"Carhartt overall, Columbia shell, Doc Martins",tags:["Carhartt","Columbia", "Doc Martin"],likes:22,comments:2}
]

export default class NewsFeed extends Component {
  
  render() {
    let tags={}
    info.map((item)=>{
      item.tags.map((tag)=>{
        if(tag in tags){
          tags[tag]+=1
        } else {
          tags[tag]=1
        }
      })
    })

    return(
      <div>
        <Row style={{paddingRight:"5%",paddingLeft:"12%",paddingTop:"5%",paddingBottom:"5%"}}>
          <Col sm={9}>
          {info.map((item)=>{
            return (
              <Row>
                <Post id={item.username+item.likes+item.comments} username={item.username} pic={item.pic} desc={item.desc} tags={item.tags} likes={item.likes} comments={item.comments} />
              </Row>
            )
          })}
          </Col>
          <Col sm={3}>
            <Filters style={{borderWidth:"1px",borderColor:"#fdd835"}} tags={tags}/>
          </Col>
        </Row>
      </div>
    )
  }
}
