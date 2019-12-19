import React, { Component } from 'react';
import ButtonNewSearch from './buttonNewSearch';
import ButtonLogout from './buttonLogout';

class ResultsButtons extends Component {
  render() {
    return (
      <div className="button-row">
        <ButtonNewSearch onNewSearch={this.props.onNewSearch} />
        <ButtonLogout />
      </div>
    )
  }
}

export default ResultsButtons;
