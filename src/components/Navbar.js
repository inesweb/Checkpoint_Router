import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar ">
          
            <Link className="navbar-brand" to ="/"> Back Home</Link>
           
        
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;