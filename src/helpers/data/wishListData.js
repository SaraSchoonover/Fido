import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getWishList = (user) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/wishList.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addWishList = (obj, user) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/wishList.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios
        .patch(`${dbURL}/wishList/${response.data.name}.json`, body)
        .then(() => {
          getWishList(user).then((userObj) => resolve(userObj));
        });
    })
    .catch((error) => reject(error));
});

const deleteWishList = (firebaseKey, user) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/wishList/${firebaseKey}.json`)
    .then(() => getWishList(user).then((dogsArray) => resolve(dogsArray)))
    .catch((error) => reject(error));
});

export { addWishList, getWishList, deleteWishList };
