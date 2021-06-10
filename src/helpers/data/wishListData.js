import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getWishList = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/wishList.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addWishList = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/wishList.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios
        .patch(`${dbURL}/wishList/${response.data.name}.json`, body)
        .then(() => {
          getWishList(response.data.name).then((userObj) => resolve(userObj));
        });
    })
    .catch((error) => reject(error));
});

export { addWishList, getWishList };
