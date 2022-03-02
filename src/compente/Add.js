import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { useState } from "react";
function Add({addMovie}) {
  const [Movie, setMovie] = useState({ id: 3, poster: '', title: '' })
  const handelChange = (event) => {

    setMovie({
      ...Movie, id: Math.floor(Math.random() * 10000) + 1,
      [event.target.id]: event.target.value
    })
  };

  const onSubmit = (event) => {
 
    event.preventDefault();
    addMovie(Movie);
    setMovie({ title: "", poster: "" });
 
  }
  return (



    <Form  className="formAdd" onSubmit={onSubmit}>
      <Form.Group className="modalBody">
        <Form.Label>New Movie</Form.Label>
        <Form.Control
          value={Movie.title}
          id="title"
          type="text"
          placeholder="choose a movie"
          onChange={handelChange}
        />
        <Form.Control
          id="poster"
          value={Movie.poster}
          type="text"
          placeholder="post a image"
          onChange={handelChange}
        />
      </Form.Group>

      <Button className="buttonAdd"variant="primary" type="submit">
        Add
      </Button>

    </Form>






  )
}

export default Add;