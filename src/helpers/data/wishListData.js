/* eslint-disable eqeqeq */
import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getDogs } from './dogData';

const dbURL = firebaseConfig.databaseURL;

const getWishList = (user) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/wishList.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addWishList = (obj, user) => new Promise((resolve, reject) => {
  console.warn(obj);
  console.warn(user);
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

// const funca = async (obj, user) => {
//   const currentWishList = await getWishList(user);
//   let dogExists = true;
//   // debugger;
//   currentWishList.forEach((dog) => function () {
//     if (dog.dogId == obj.dogId) {
//       dogExists = true;
//     }
//   });
//   if (dogExists === false) {
//     addWishList(obj, user);
//   }
// };

const deleteWishList = (firebaseKey, user) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/wishList/${firebaseKey}.json`)
    .then(() => getWishList(user).then((dogsArray) => resolve(dogsArray)))
    .catch((error) => reject(error));
});

const mergedData = (user) => new Promise((resolve, reject) => {
  Promise.all([getDogs(), getWishList(user)])
    .then(([dogResult, wishListsResult]) => {
      resolve(dogResult.map((dog) => ({
        ...dog,
        isFavorited: Boolean(wishListsResult.find((fav) => fav.dogId === dog.firebaseKey))
      })));
    }).catch((error) => reject(error));
});

export {
  addWishList,
  getWishList,
  deleteWishList,
  mergedData,
  // funca
};
