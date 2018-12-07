//To add the user input
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import SurveyField from "./surveyField";
import validateEmails from "../../utils/valitdateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <div key={name}>
          <Field
            component={SurveyField}
            type="text"
            label={label}
            name={name}
          />
        </div>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <NavLink
            className="btn waves-effect red left waves-light"
            to="/surveys"
          >
            Cancel
          </NavLink>
          <button
            className="btn waves-effect right waves-light"
            type="submit"
            name="action"
          >
            Next <i className="material-icons right"> send </i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || " ");
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = `you must provide the ${name}`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
