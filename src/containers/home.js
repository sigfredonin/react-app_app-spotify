import React, { Component } from 'react';
import HomeHeading from '../components/homeHeading';
import HomeButtons from '../components/homeButtons';
import UserServices from '../services/userServices';

const userServices = new UserServices();


class Home extends Component {
  constructor(props) {
    super(props);
    this.onLoginClick = this.onLoginClick.bind(this);
  };

  onLoginClick() {
    userServices.login();
  };

  render() {
    return(
      <div className='home'>
        <div className="row mt-5">
          <div className="col-md-10 m-auto">
            <div className="card card-body">
              <HomeHeading />
              <p>Log in with Spotify to begin searching ...</p>
              <HomeButtons onLoginClick={this.onLoginClick} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
