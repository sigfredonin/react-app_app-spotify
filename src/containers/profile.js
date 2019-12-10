import React, { Component } from 'react';
import ProfileHeading from '../components/profileHeading';
import UserInfo from '../components/userinfo';
import ProfileButtons from '../components/profileButtons';

class Profile extends Component {
  render() {
    const userId = this.props.match.params.id;
    console.log(`Profile: id=${userId}`);
    return(
      <div className='profile'>
        <div className="row mt-5">
          <div className="col-md-10 m-auto">
            <div className="card card-body">
              <ProfileHeading />
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
