import React, { Component } from 'react';

class SearchHeading extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center mb-3">
          <i className="fas fa-search"></i>
          {"    Search Spotify"}
        </h1>
      </div>
    )
  }
}

export default SearchHeading;
