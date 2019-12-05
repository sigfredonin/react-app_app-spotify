import React, { Component } from 'react';
import UserInfo from '../components/userinfo.js';
import ProfileButtons from '../components/profileButtons.js';

class Profile extends Component {
  render() {
    const userId = this.props.match.params.id;
    console.log(`Profile: id=${userId}`);
    return(
      <div className='profile'>
        <div className="row mt-5">
          <div className="col-md-10 m-auto">
            <div className="card card-body">
              <UserInfo className='userinfo' id={userId} />
              <ProfileButtons id={userId} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
