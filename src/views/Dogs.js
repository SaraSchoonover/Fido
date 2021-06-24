import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DogCard from '../App/components/DogCard';
// import { getDogs } from '../helpers/data/dogData';
import { mergedData } from '../helpers/data/wishListData';
import Footer from '../App/components/Footer';

function Dogs({
  admin,
  user,
  uid,
  setDog
}) {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    mergedData(user)
      .then((dogsArray) => {
        setDogs(dogsArray);
      });
  }, []);

  return (
    <div className="this">
      <div className='font'>
      <h2>Available Dogs: </h2>
      </div>
      <div className="card-container">
      {dogs.map((dogInfo) => (
        <DogCard
        key={dogInfo.firebaseKey}
        firebaseKey={dogInfo.firebaseKey}
        age ={dogInfo.age}
        breedId={dogInfo.breedId}
        status={dogInfo.status}
        name={dogInfo.name}
        description={dogInfo.description}
        imageUrl={dogInfo.imageUrl}
        setDogs={setDogs}
        dogs={dogs}
        admin={admin}
        user={user}
        uid={uid}
        isFavorited={dogInfo.isFavorited}
        setDog={setDog}
        />
      ))}
      </div>
      <Footer />
    </div>
  );
}

Dogs.propTypes = {
  firebaseKey: PropTypes.string,
  imageUrl: PropTypes.string,
  age: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  breedId: PropTypes.string,
  description: PropTypes.string,
  dogs: PropTypes.array,
  setDogs: PropTypes.func,
  admin: PropTypes.any,
  user: PropTypes.any,
  uid: PropTypes.any,
  setDog: PropTypes.func,
};

export default Dogs;
