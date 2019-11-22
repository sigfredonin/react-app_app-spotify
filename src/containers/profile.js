import React, { Component } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import UserInfo from '../components/userinfo.js';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.getParams = this.getParams.bind(this);
    this.loggedInButtons = this.loggedInButtons.bind(this);
    const params = this.getParams();
    this.state = {
      id: params.id
    };
  }

  getParams() {
    const params = queryString.parse(this.props.location.hash);
    console.log("Profile params: %O", params);
    return params;
  }

  loggedInButtons() {
    return (
      <div className="button-row">
        <Link to={`/search/${this.state.id}`} >
          <button className="btn btn-secondary">Search Spotify</button>
        </Link>
        <a href={`/users/logout?id=${this.state.id}`} className="btn btn-secondary">Logout</a>
      </div>
    )
  }

  render() {
    return(
      <div className='profile'>
        <div className="row mt-5">
          <div className="col-md-10 m-auto">
            <div className="card card-body">
              <UserInfo className='userinfo' id={this.state.id} />
              <this.loggedInButtons />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
