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
        <div className="row mt-5">
          <div className="col-md-10 m-auto">
            <div className="card card-body">
              <h1 className="text-center mb-3">
                <i className="fas fa-search"></i>
                {"    Search Results"}
              </h1>
              <p>Search Term: {this.props.results.searchResults.search_term}</p>
              <p>number of results = {Object.keys(this.props.results.searchResults.spotifyResponse).length}</p>
              <SearchResults id={this.props.id} spotifyResponse={this.props.results.searchResults.spotifyResponse} />
              <SearchButtons id={this.props.id} onNewSearch={this.onNewSearch} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Results;
