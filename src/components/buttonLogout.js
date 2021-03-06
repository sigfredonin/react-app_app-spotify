import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import UserServices from '../services/userServices';

const userServices = new UserServices();

class ButtonLogout extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  };

  onClick() {
    userServices.logout();
    this.props.history.push('/');   // Go to login page
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick} className="btn btn-secondary">
          Logout
        </button>
      </div>
    )
  }
}

export default withRouter(ButtonLogout);
