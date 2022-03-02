import React, { useState } from "react";
import { Link } from "react-router-dom"
import { Container, Nav, Navbar } from "react-bootstrap"
const NavBarComponent = ({onSeqrch}) => {
  const [caracter, setCaracter] = useState("");
  const handleChange = (event) => {
    setCaracter(event.target.value);
  };
  const   onSubmit=(event)=>{
    event.preventDefault()
    onSeqrch(caracter)
  
  }
  return (
    <Navbar >
      <Container>
        <Nav style={{ display: "flex"   ,margin:"auto",width:'100%',flexWrap:"wrap",marginTop:"0px",justifyContent: "center" }}>
          <form className="flex" onSubmit={onSubmit}>
            <input type="text" id="title" onChange={handleChange} />
            <button type="submit">search</button>
          </form>
          <Link to='/' className="navLink">Home</Link>
          <Link to='/Add' className="navLink">Add</Link>
          <Link to='/Seqrch' className="navLink">Seqrch</Link>

        </Nav>
      </Container>
    </Navbar>

  )
}

export default NavBarComponent