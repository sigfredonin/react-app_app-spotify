import React, { Component } from 'react';

class Results extends Component {
  render() {
    return (
      <div className="container">
        <h3>Results</h3>
        <p>user ID = {this.props.results.userId}</p>
        <p>number of results = {Object.keys(this.props.results.searchResults.spotifyResponse).length}</p>
      </div>
    )
  }
}

export default Results;
