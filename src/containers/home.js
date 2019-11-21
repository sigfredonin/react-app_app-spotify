import React, { Component } from 'react';
//import UserServices from '../services/userServices';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  render() {
    //(new UserServices()).userLoginWithSpotify();
    return(
      <div className='home'>
        <div className="row mt-5">
          <div className="col-md-10 m-auto">
            <div className="card card-body">
              <h1 class="text-center mb-3"><i class="fas fa-sign-in-alt"></i>   Home</h1>
              <p>Log in with Spotify to begin searching ...</p>
              <div className="button-row">
                <a href="http://localhost:8081/users/spotify" className="btn btn-secondary">
                    Login with Spotify
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
