import React, { Component } from 'react';

class ButtonLogin extends Component {
  render() {
    return (
      <div>
        <a href="/users/spotify" className="btn btn-secondary">
          Login with Spotify
        </a>
      </div>
    )
  }
}

export default ButtonLogin;
