import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  state = {  } 
  render() { 
    return (
      <nav>
        <ul>
          <li>
            <Link to="/contest">contest</Link>
            <Link to="/hackathon">hackathon</Link>
            <Link to="/hiring">hiring</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
 
export default Navbar;