import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <NavLink to="/auth/google">Login</NavLink>
          </li>
        );
      default:
        return (
          <li>
            <NavLink to="/api/logout">Logout</NavLink>
          </li>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <NavLink to="/" className="brand-logo">
            Fankui
          </NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
            <li>
              <NavLink to="/api/home">Home</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Navbar);
