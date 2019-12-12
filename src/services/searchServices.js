import Axios from 'axios';

class SearchServices {

  search(params) {
    console.log("Search parameters: %O", params);
    return Axios.post("/spotify/search", params)
    .then( response => {
      return response.data;
    });
  }
}

export default SearchServices;
