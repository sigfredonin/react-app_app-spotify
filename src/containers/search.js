import React, { Component } from 'react';
import SearchForm from '../components/searchform.js';

class Search extends Component {
  render() {
    console.log(`Search: id=${this.props.match.params.id}`);
    return(
      <div className='search'>
        <div className="row mt-5">
          <div className="col-md-10 m-auto">
            <div className="card card-body">
              <h1 className="text-center mb-3">
                <i className="fas fa-search"></i>
                {"    Search Spotify"}
              </h1>
              <SearchForm id={this.props.match.params.id} />
              <div className="button-row">
                <a className="btn btn-secondary"
                  href={`/users/logout?id=${this.props.match.params.id}`}
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
