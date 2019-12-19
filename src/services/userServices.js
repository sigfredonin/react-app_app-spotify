import Axios from 'axios';
import defaultImage from '../images/person_wispy_hair.jpg';

class UserServices {

  login() {
    const requestURL = "/users/spotify";
    console.log(`login: GET ${requestURL}`);
    return Axios.get(requestURL)
    .then( response => {
      console.log(`... response: %O`, response);
      const userData = response.data;
      return userData;
    })
    .catch( error => {
      console.log(`... error: %O`, error);
    })
  };

  logout() {
    const requestURL = "/users/logout";
    console.log(`logout: GET ${requestURL}`);
    return Axios.get(requestURL)
    .then( response => {
      console.log(`... response: %O`, response);
      const userData = response.data;
      return userData;
    })
    .catch( error => {
      console.log(`... error: %O`, error);
    })
  };

  getLoggedInUser() {
    const requestURL = "/users/info";
    console.log(`login: GET ${requestURL}`);
    return Axios.get(requestURL)
    .then( response => {
      console.log(`... response: %O`, response);
      const userData = response.data;
      if (!userData.imageURL) {
        userData.imageURL = defaultImage;
      };
      return userData;
    })
  };
}

export default UserServices;
