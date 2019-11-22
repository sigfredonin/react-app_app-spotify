import React, { Component } from 'react';
import defaultImage from '../images/person_wispy_hair.jpg'
import UserServices from '../services/userServices';

const userServices = new UserServices();

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      user: {
        name: '',
        provider: '',
        spotifyID: '',
        email: '',
        expires: '',
        imageURL: defaultImage
      }
    }
  }
  
  componentDidMount() {
    console.log(`UserInfo: id=${this.state.id}`);
    if (this.state.id) {
      userServices.getLoggedInUser(this.state.id, (userData, error) => {
        if (!userData.imageURL) {
          userData.imageURL = defaultImage;
        }
        if (userData) {
          this.setState({
            user: userData
          });
        }
        console.log("UserInfo: user=%O", this.state.user);
      });
    }
  }
    
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
        </div>
      )
  }
}

export default UserInfo;
