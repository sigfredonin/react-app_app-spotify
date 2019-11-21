import Axios from 'axios';

class UserServices {
  constructor(props) {
    this.state = {
      userData: '',
      error: {}
    }
    this.getLoggedInUser = this.getLoggedInUser.bind(this);
  };

  getLoggedInUser(id) {
    console.log(`getLoggedInUser, id=${id}`);
    const userDataURL = 'http://localhost:8081/users/info';
    Axios.get(userDataURL, { params: { id: id }})
      .then( (response) => {
        console.log("response", response);
        this.state.userData = response.data;
        console.log("userData", this.state.userData);
      })
      .catch( (error) => {
        this.state.error  = error;
        console.log(error);
      });
    }
}

export default UserServices;
