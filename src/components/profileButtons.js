import React, { Component } from 'react';
import ButtonSearch from './buttonSearch';
import ButtonLogout from './buttonLogout';

class ProfileButtons extends Component {
  render() {
    return (
      <div className="button-row">
        <ButtonSearch />
        <ButtonLogout />
      </div>
    )
  }
}

export default ProfileButtons;
