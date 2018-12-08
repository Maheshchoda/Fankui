import React from "react";
import { NavLink } from "react-router-dom";
import SurveyList from "./surveys/surveyList";
const Dashboard = () => {
  return (
    <div>
      <SurveyList />
      <div className="fixed-action-btn ">
        <NavLink className="btn-floating btn-large  red" to="/surveys/new">
          <i className="large  material-icons">add</i>
        </NavLink>
      </div>
    </div>
  );
};

export default Dashboard;
