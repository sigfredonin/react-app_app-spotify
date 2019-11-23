import React, { Component } from 'react';

class Home extends Component {
  render() {
    return(
      <div className='home'>
        <div className="row mt-5">
          <div className="col-md-10 m-auto">
            <div className="card card-body">
              <h1 className="text-center mb-3">
                <i className="fas fa-sign-in-alt"></i>
                  {"    Home"}
                </h1>
              <p>Log in with Spotify to begin searching ...</p>
              <div className="button-row">
                <a href="/users/spotify" className="btn btn-secondary">
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
