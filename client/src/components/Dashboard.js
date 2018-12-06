import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>This is from the dashboard</h1>
      <div className="fixed-action-btn ">
        <NavLink className="btn-floating btn-large  red" to="/surveys/new">
          <i className="large  material-icons">add</i>
        </NavLink>
      </div>
    </div>
  );
};

export default Dashboard;
