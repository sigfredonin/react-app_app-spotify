import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
    }
  }
  
  render() {
    const searchURL=`http://localhost:8081/spotify/search?id=${this.state.id}`;
    console.log(`Search URL: ${searchURL}`);
    return(
      <form action={searchURL} method="POST">
        <div className="input-group mb-3">
          <input type="text" className="form-control"
            placeholder="Artist, album, playlist, or song ..."
            name="search_term"
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
