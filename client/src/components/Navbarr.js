import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import Payments from "./Payments";

class Navbarr extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login</a>
          </li>
        );
      default:
        return [
          <li key={2}>
            <Payments />
          </li>,
          <li key={3} style={{ margin: "0 10px" }}>
            Credits:{this.props.auth.credits}
          </li>,
          <li key={1}>
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <NavLink
            to={this.props.auth ? "/surveys" : "/"}
            className="brand-logo"
          >
            Fankui
          </NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Navbarr);
