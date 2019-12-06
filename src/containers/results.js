import React, { Component } from 'react';
import SearchButtons from "../components/searchButtons";

class Results extends Component {
  constructor(props){
    super(props);
    this.onNewSearch = this.onNewSearch.bind(this);
  };

  onNewSearch() {
    this.props.onChangeSearchResults(null);
  }

  render() {
    return (
      <div className="container">
        <h3>Results</h3>
        <p>Search Term: {this.props.results.searchResults.search_term}</p>
        <p>number of results = {Object.keys(this.props.results.searchResults.spotifyResponse).length}</p>
        <SearchButtons onNewSearch={this.onNewSearch} />
      </div>
    )
  }
}

export default Results;
