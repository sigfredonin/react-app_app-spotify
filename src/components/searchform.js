import React, { Component } from 'react';
import SearchServices from '../services/searchServices';

const searchServices = new SearchServices();

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_term: ''
    };
    this.onChangeSearchTerm = this.onChangeSearchTerm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  onChangeSearchTerm(event) {
    this.setState({
      search_term: event.target.value
    });
  };

  onSubmit(event) {
    event.preventDefault();
    const params = {
      userId: this.props.id,
      search_term: this.state.search_term
    };
    searchServices.search(params, (searchResults, error) => {
      console.log("Search Results %O", searchResults);
      this.props.onChangeSearchResults(searchResults);
    });
  };

  render() {
    return(
      <form onSubmit={this.onSubmit}>
        <div className="input-group mb-3">
          <input type="text" className="form-control"
            placeholder="Artist, album, playlist, or song ..."
            name="search_term"
            onChange={this.onChangeSearchTerm}
            aria-label="Search Spotify for artist, album, playlist, or song"
            aria-describedby="search_term"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">Search</button>
          </div>
        </div>
      </form>
    )
  }
}

export default SearchForm;
