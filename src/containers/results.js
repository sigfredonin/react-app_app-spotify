import React, { Component } from 'react';
import SearchResults from "../components/searchResults";
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
        <h1 className="text-center mb-3">
          <i className="fas fa-search"></i>
          {"    Search Results"}
        </h1>
        <p><strong>Search Term:</strong> {this.props.results.searchResults.search_term}</p>
        <SearchResults id={this.props.id} spotifyResponse={this.props.results.searchResults.spotifyResponse} />
        <SearchButtons id={this.props.id} onNewSearch={this.onNewSearch} />
      </div>
    )
  }
}

export default Results;
