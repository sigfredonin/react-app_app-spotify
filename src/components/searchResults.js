import React, { Component } from 'react';
import CategoryList from './categoryList';

class SearchResults extends Component {
  render() {
    const searchResults = this.props.spotifyResponse;
    return (
      <div>
        <CategoryList type={'artists'} items={searchResults.artists} />
        <CategoryList type={'albums'} items={searchResults.albums} />
        <CategoryList type={'tracks'} items={searchResults.tracks} />
        <CategoryList type={'playlists'} items={searchResults.playlists} />
      </div>
    )
  }
}

export default SearchResults;
