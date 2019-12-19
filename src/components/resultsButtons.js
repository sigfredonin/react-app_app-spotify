import React, { Component } from 'react';
import ButtonLogout from './buttonLogout';

class ResultsButtons extends Component {
  render() {
    return (
      <div className="button-row">
        <button onClick={this.props.onNewSearch} className="btn btn-secondary">New Search</button>
        <ButtonLogout />
      </div>
    )
  }
}

export default ResultsButtons;
