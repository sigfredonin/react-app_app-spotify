import React, { Component } from 'react';
import Search from './search';
import Results from './results';

class SearchFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_results: null
    };
    this.onChangeSearchResults = this.onChangeSearchResults.bind(this);
  };

  onChangeSearchResults(results) {
    console.log("SearchFrame results changed to: %O", results);
    this.setState({
      search_results: results
    });
  };

  render() {
    if (this.state.search_results == null) {
      console.log("Search Form");
      return(
        <div className='container'>
          <Search onChangeSearchResults={this.onChangeSearchResults} />
        </div>
      )
    } else {
      console.log("Search Results");
      return(
        <div className='container'>
          <Results results={this.state.search_results} onChangeSearchResults={this.onChangeSearchResults} />
        </div>
      )
    }
  }
}

export default SearchFrame;
