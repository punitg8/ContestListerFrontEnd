import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  state = {  } 
  render() { 
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="navbar-brand" href="#">Contest-Lister</div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
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
    );
  }
}
 
export default Navbar;