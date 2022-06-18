import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import{Container,Nav} from 'react-bootstrap'
class Navbar extends Component {
  state = {  } 
  render() { 
    return (<>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="navbar-brand" href="#">&nbsp;&nbsp;Contest-Lister</div>
        <button class="navbar-toggler" type="button" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            {/* <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a> */}
            <Link class="nav-item nav-link" to="/contest">Contest</Link>
            <Link class="nav-item nav-link" to="/hackathon">Hackathon</Link>
            <Link class="nav-item nav-link" to="/hiring">Hiring</Link>
          </div>
        </div>
      </nav>
      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <Link class="nav-item nav-link" to="/contest">Contest</Link>
        <Link class="nav-item nav-link" to="/hackathon">Hackathon</Link>
        <Link class="nav-item nav-link" to="/hiring">Hiring</Link>
      </Nav>
      </Container>
    </Navbar>
    </>
    );
  }
}
 
export default Navbar;