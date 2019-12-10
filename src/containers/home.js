import React, { Component } from 'react';
import HomeButtons from '../components/homeButtons';
import HomeHeading from '../components/homeHeading';

class Home extends Component {
  render() {
    return(
      <div className='home'>
        <div className="row mt-5">
          <div className="col-md-10 m-auto">
            <div className="card card-body">
              <HomeHeading />
              <p>Log in with Spotify to begin searching ...</p>
              <HomeButtons />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
