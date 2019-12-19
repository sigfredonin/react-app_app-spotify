import React, { Component } from 'react';
import SearchHeading from '../components/searchHeading';
import SearchForm from '../components/searchForm';
import SearchButtons from '../components/searchButtons';

class Search extends Component {
  render() {
    console.log("Search");
    return(
      <div className='search'>
        <div className="row mt-5">
          <div className="col-md-10 m-auto">
            <div className="card card-body">
              <SearchHeading />
              <SearchForm onChangeSearchResults={this.props.onChangeSearchResults} />
              <SearchButtons />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
