import React, { Component } from 'react';
import Category from './category';

class SearchResults extends Component {
  render() {
    const searchResults = this.props.spotifyResponse;
    return (
      <div className='container'>
        <Category type={'artists'} items={searchResults.artists} />
        <Category type={'albums'} items={searchResults.albums} />
        <Category type={'tracks'} items={searchResults.tracks} />
        <Category type={'playlists'} items={searchResults.playlists} />
      </div>
    )
  }
}

export default SearchResults;
