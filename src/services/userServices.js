import Axios from 'axios';

class UserServices {
  constructor(props) {
    this.state = {
      userData: '',
      error: {}
    }
    this.getLoggedInUser = this.getLoggedInUser.bind(this);
  };

  getLoggedInUser(id, done) {
    console.log(`getLoggedInUser, id=${id}`);
    const userDataURL = 'http://localhost:8081/users/info';
    Axios.get(userDataURL, { params: { id: id }})
    .then( (response) => {
      console.log("response", response);
      this.state.userData = response.data;
      console.log("userData", this.state.userData);
      done(this.state.userData, null);
    })
    .catch( (error) => {
      this.state.error  = error;
      console.log(error);
      done(null, error);
    });
  }
}

export default UserServices;
