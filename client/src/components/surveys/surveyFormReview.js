//Shows user the form for review
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return (
    <div>
      <h5>please confirm your details</h5>
      {reviewFields}
      <button
        className=" btn yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="btn waves-effect right green"
      >
        Send Survey
        <i href="/" className="material-icons right">
          email
        </i>
      </button>
    </div>
  );
};

function mapStatetoProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(
  mapStatetoProps,
  actions
)(withRouter(SurveyFormReview));
