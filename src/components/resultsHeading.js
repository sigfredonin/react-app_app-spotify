import React, { Component } from 'react';

class ResultsHeading extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center mb-3">
          <i className="fas fa-search"></i>
          {"    Search Results"}
        </h1>
      </div>
    )
  }
}

export default ResultsHeading;
