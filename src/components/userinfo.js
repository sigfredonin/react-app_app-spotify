import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import defaultImage from '../images/person_wispy_hair.jpg';
import UserServices from '../services/userServices';

const userServices = new UserServices();

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      user: {
        name: '',
        provider: '',
        spotifyID: '',
        email: '',
        expires: '',
        imageURL: defaultImage
      },
      error: null
    };
    this.getError = this.getError.bind(this);
  }

  componentDidMount() {
    userServices.getLoggedInUser()
    .then( userData => {
      console.log("UserInfo: user=%O", userData);
      this.setState({
        user: userData
      });
    })
    .catch( error => {
      console.log("Error: error=%O", error);
      if (error.response.status === 401) {
        this.props.history.push('/'); // User needs to login; go to login page
      } else {
        this.setState({
          error: error
        });
      };
    });
}

  getError() {
    if (this.state.error) {
      return (
        <div>
          <strong>ERROR: </strong> {this.state.error.message}
        </div>
      );
    }
    return null;
  };
    
  render () {
      return(
        <div className="userinfo">
          <h3>Welcome {this.state.user.name}.</h3>
          <ul className="list-group list-group-horizontal list-group-flush">
            <li className="list-group-item narrow-row">
              <img className="item-picture"
                alt="user"
                src={this.state.user.imageURL}
                height={100}>
              </img>
            </li>
            <li className="list-group-item narrow-desc">
              <ul className="list-group">
                <li className="list-group-item narrow-row">Logged in with {this.state.user.provider}.</li>
                <li className="list-group-item narrow-row">Logged in as: {this.state.user.email}.</li>
                <li className="list-group-item narrow-row">Access token expires: <small>{this.state.user.expires}</small>.</li>
              </ul>
            </li>
          </ul>
          <div className="error-message">
            {this.getError()}
          </div>
        </div>
      )
  }
}

export default withRouter(UserInfo);
