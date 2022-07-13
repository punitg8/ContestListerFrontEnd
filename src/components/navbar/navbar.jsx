import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import{Container,Nav,Navbar as ReactNavbar} from 'react-bootstrap'
class Navbar extends Component {
  render() { 
    return (<>
      <ReactNavbar bg="dark" variant="dark">
        <Container>
          <ReactNavbar.Brand href="#">Contest-Lister</ReactNavbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-item nav-link" to="/contest">Contest</Link>
            <Link className="nav-item nav-link" to="/hackathon">Hackathon</Link>
            <Link className="nav-item nav-link" to="/hiring">Hiring</Link>
          </Nav>
        </Container>
      </ReactNavbar>
    </>
    );
  }
}
 
export default Navbar;