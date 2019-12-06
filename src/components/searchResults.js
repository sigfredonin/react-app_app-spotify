import React, { Component } from 'react';
import CategoryItem from './categoryItem';

class SearchResults extends Component {
  render() {
    const searchResults = this.props.spotifyResponse;
    return (
      <div className='container'>
        <CategoryItem type={'artists'} items={searchResults.artists} />
        <CategoryItem type={'albums'} items={searchResults.albums} />
        <CategoryItem type={'tracks'} items={searchResults.tracks} />
        <CategoryItem type={'playlists'} items={searchResults.playlists} />
      </div>
    )
  }
}

export default SearchResults;
