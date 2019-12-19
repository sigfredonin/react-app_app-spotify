import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import UserServices from '../services/userServices';

const userServices = new UserServices();

class ButtonLogout extends Component {
  constructor(props) {
    super(props);
    this.onLogoutClick = this.onLogoutClick.bind(this);
  };

  onLogoutClick() {
    userServices.logout();
    this.props.history.push('/');   // Go to login page
  };

  render() {
    return (
      <div>
        <button onClick={this.onLogoutClick} className="btn btn-secondary">
          Logout
        </button>
      </div>
    )
  }
}

export default withRouter(ButtonLogout);
