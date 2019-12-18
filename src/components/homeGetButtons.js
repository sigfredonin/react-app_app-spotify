import React, { Component } from 'react';

class HomeButtons extends Component {
  render() {
    return (
      <div className="button-row">
        <button onClick={this.props.onLoginClick} className="btn btn-secondary">
          Login with Spotify
        </button>
      </div>
    )
  }
}

export default HomeButtons;
