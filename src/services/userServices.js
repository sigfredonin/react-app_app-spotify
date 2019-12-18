import Axios from 'axios';
import defaultImage from '../images/person_wispy_hair.jpg';

class UserServices {

  login() {
    return Axios.get('/users/spotify')
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
    return Axios.get('/users/info')
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
