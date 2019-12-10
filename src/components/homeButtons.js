import React, { Component } from 'react';

class HomeButtons extends Component {
  render() {
    return (
      <div className="button-row">
        <a href="/users/spotify" className="btn btn-secondary">
          Login with Spotify
        </a>
      </div>
    )
  }
}

export default HomeButtons;
