import Axios from 'axios';
import defaultImage from '../images/person_wispy_hair.jpg';

class UserServices {

  getLoggedInUser(id) {
    console.log(`getUser, id=${id}`);
    const userDataURL = '/users/info';
    return Axios.get(userDataURL, { params: { id: id }})
    .then( response => {
      const userData = response.data;
      if (!userData.imageURL) {
        userData.imageURL = defaultImage;
      };
      return userData;
    })
  };
}

export default UserServices;
