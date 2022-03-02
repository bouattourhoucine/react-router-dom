import React from 'react';
import MovieCard from "./MovieCard";

const MovieList = (props) => {
	console.log(props.Movies)
	return (
		<div  style={{display:"flex",margin:"auto",width:'70%',flexWrap:"wrap",marginTop:"100px" }}>
		{props.Movies.map((elt)=><MovieCard movie={elt} key={elt.id}  />   )}
        </div>
		
	);
};

export default MovieList;