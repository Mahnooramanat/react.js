import react from "react";
import React,{useState} from 'react'
import {Card,Button} from 'react-bootstrap/'
import  './Cards.css';
import card from "./CardApi";
const Cards=()=>{
  const[item,setItem]=useState(card);
  return(
    <>
    <div className="box">
    {
      item.map((ourElem)=>{
        const{id,image,name,description}=ourElem;
  return (
    <Card style={{ width: '20rem'}}className='mt-4 mx-3'>
      <Card.Img className="img" variant="top"src={image}/>
      <Card.Body>
        <Card.Title className="tag">{name}</Card.Title>
        <Card.Text className="context">
      {description }
</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
      })
}
    </div>
    </>
)
}
export default Cards;
