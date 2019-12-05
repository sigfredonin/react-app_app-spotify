import Axios from 'axios';

class SearchServices {
  constructor(props) {
    this.state = {
      searchResults: {},
      error: {}
    };
    this.search = this.search.bind(this);
  };

  search(params, done) {
    console.log("Search parameters: %O", params);
    Axios.post("/spotify/search", params)
    .then( (response) => {
      this.state.searchResults = response.data;
      console.log("searchResults", this.state.searchResults);
      done(this.state.userData, null);
    })
    .catch( (error) => {
      this.state.error  = error;
      console.log(error);
      done(null, error);
    });
  }
}

export default SearchServices;
