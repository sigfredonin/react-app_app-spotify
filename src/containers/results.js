import React, { Component } from 'react';
import ResultsHeading from '../components/resultsHeading';
import SearchResults from "../components/searchResults";
import ResultsButtons from "../components/resultsButtons";

class Results extends Component {
  constructor(props){
    super(props);
    this.onNewSearch = this.onNewSearch.bind(this);
  };

  onNewSearch() {
    this.props.onChangeSearchResults(null);
  }

  render() {
    console.log("Results");
    return (
      <div className="container">
        <ResultsHeading />
        <p><strong>Search Term:</strong> {this.props.results.searchResults.search_term}</p>
        <SearchResults spotifyResponse={this.props.results.searchResults.spotifyResponse} />
        <ResultsButtons onNewSearch={this.onNewSearch} />
      </div>
    )
  }
}

export default Results;
