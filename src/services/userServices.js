import Axios from 'axios';
import defaultImage from '../images/person_wispy_hair.jpg';

class UserServices {

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
