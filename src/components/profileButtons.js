import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ButtonLogout from './buttonLogout';

class ProfileButtons extends Component {
  render() {
    return (
      <div className="button-row">
        <div>
          <Link to={"/search"} >
            <button className="btn btn-secondary">Search Spotify</button>
          </Link>
        </div>
        <ButtonLogout />
      </div>
    )
  }
}

export default ProfileButtons;
