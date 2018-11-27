import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <NavLink to="/" className="brand-logo">
            Fankui
          </NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/auth/google">Login</NavLink>
            </li>
            <li>
              <NavLink to="/api/user">User</NavLink>
            </li>
            <li>
              <NavLink to="/api/home">Home</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
