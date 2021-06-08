import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getDogs = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/dog.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addDogs = (dog) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/dog.json`, dog)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios
        .patch(`${dbURL}/dog/${response.data.name}.json`, body)
        .then(() => {
          getDogs().then((dogArray) => resolve(dogArray));
        });
    })
    .catch((error) => reject(error));
});

const deleteDogs = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/dog/${firebaseKey}.json`)
    .then(() => getDogs().then((dogsArray) => resolve(dogsArray)))
    .catch((error) => reject(error));
});

const updateDogs = (dog) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/dog/${dog.firebaseKey}.json`, dog)
    .then(() => getDogs().then(resolve))
    .catch((error) => reject(error));
});

export {
  getDogs,
  addDogs,
  deleteDogs,
  updateDogs
};
