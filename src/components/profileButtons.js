import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileButtons extends Component {
  render() {
    return (
      <div className="button-row">
        <Link to={"/search"} >
          <button className="btn btn-secondary">Search Spotify</button>
        </Link>
        <a href={`/users/logout`} className="btn btn-secondary">Logout</a>
      </div>
    )
  }
}

export default ProfileButtons;
