import React, { Component } from 'react';
import SearchForm from '../components/searchform.js';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
    }
  }
  
  render() {
    console.log(`Search: id=${this.state.id}`);
    return(
        <div className='search'>
          <div className="row mt-5">
            <div className="col-md-10 m-auto">
              <div className="card card-body">
                <h1 className="text-center mb-3">
                  <i className="fas fa-search"></i>
                    {"    Search Spotify"}
                </h1>
                <SearchForm id={this.state.id} />
                <div className="button-row">
                  <a className="btn btn-secondary"
                    href={`/users/logout?id=${this.state.id}`}
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
