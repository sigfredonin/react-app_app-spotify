import React, { Component } from 'react';

class ResultsButtons extends Component {
  render() {
    return (
      <div className="button-row">
        <button onClick={this.props.onNewSearch} className="btn btn-secondary">New Search</button>
        <a href={"/users/logout"} className="btn btn-secondary">Logout</a>
      </div>
    )
  }
}

export default ResultsButtons;
