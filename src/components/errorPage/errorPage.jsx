import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './errorPage.css'
class ErrorPage extends Component {
  state = {  } 
  render() { 
    return (
      <div id="main" >
        <div className="fof">
              <h1>Error</h1>
              <h2>Page Not Found</h2>
              <Link className="btn btn-dark mt-4" to="/contest">Go back</Link>
        </div>
      </div>
    );
  }
}
 
export default ErrorPage;