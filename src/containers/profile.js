import React, { Component } from 'react';
import queryString from 'query-string';
import UserServices from '../services/userServices';
import UserInfo from '../components/userinfo.js';

const userServices = new UserServices();

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id
    };
    this.loggedInButtons = this.loggedInButtons.bind(this);
  }

  componentDidMount() {
    const params = queryString.parse(this.props.location.hash);
    console.log("Profile params: %O", params);
    userServices.getLoggedInUser(params.id);
  }

  loggedInButtons() {
    return (
      <div className="button-row">
        <a href="http://localhost:8081/spotify/search" className="btn btn-secondary">Search Spotify</a>
        <a href="http://localhost:8081/users/logout" className="btn btn-secondary">Logout</a>
      </div>
    )
  }

  render() {
    return(
      <div className='profile'>
        <div className="row mt-5">
          <div className="col-md-10 m-auto">
            <div className="card card-body">
              <UserInfo className='userinfo' />
              <this.loggedInButtons />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
