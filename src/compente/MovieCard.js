import React from 'react'
import { Card ,Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

function MovieCard(props) {
  console.log(props.movie)
  return (
    
   
 

    
    <Link to={`/movie/${props.movie.id}`}>
        
  <Card className='Card' border="warning" style={{   width: "11rem", height: "25rem", marginRight: "30px", marginTop: "40px", backgroundColor: "lightyellow", borderRadius: "8px", }}>
  <Card.Img variant="top"  src={props.movie.poster} style={{borderRadius:"20%",width:"160px",textAlign:"center"}} />
  <Card.Body style={{fontWeight:"bolder",fontSize:"15px",color:"cornflowerblue" }}>
    <Card.Title style={{fontSize:"15px",color:"darkblue",fontWeight:"bolder"}} >{props.movie.title}  
    </Card.Title>
    <Card.Text style={{fontSize:"12px",fontWeight:"bold",color:"red", textAlign:"center"}}>
    {props.movie.decription}
    </Card.Text>
    
  </Card.Body>
</Card>
 </Link>
 )
}

export default MovieCard