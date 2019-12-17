import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchServices from '../services/searchServices';

const searchServices = new SearchServices();

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_term: '',
      error: ''
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
      search_term: this.state.search_term
    };
    searchServices.search(params)
    .then (searchResults => {
      console.log("Search Results %O", searchResults);
      this.props.onChangeSearchResults(searchResults);
    })
    .catch (error => {
      console.log("Search error: %O", error);
      if (error.response.status === 401) {
        this.props.history.push('/'); // User needs to login; go to login page
      } else {
        this.setState({
          error: error
        });
      };
    });
  };

  getError() {
    if (this.state.error) {
      return (
        <div>
          <strong>ERROR: </strong> {this.state.error.message}
        </div>
      );
    }
    return null;
  };

  render() {
    return(
      <div>
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
        <div className="error-message">
          {this.getError()}
        </div>
      </div>
    )
  }
}

export default withRouter(SearchForm);
