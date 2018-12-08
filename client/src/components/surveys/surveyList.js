import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  renderSurveys() {
    return this.props.surveys
      .reverse()
      .map(({ title, _id, body, dateSent, yes, no }) => {
        return (
          <div className="card grey darken-1" key={_id}>
            <div className="card-content white-text">
              <span className="card-title">{title}</span>
              <p>{body}</p>
              <p className="right">
                Send on:{new Date(dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className="card-action">
              <a> Yes:{yes}</a>
              <a>No:{no}</a>
            </div>
          </div>
        );
      });
  }
  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
