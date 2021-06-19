import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import WishListCard from '../App/components/WishListCard';
import { getWishList } from '../helpers/data/wishListData';

function WishList({ user }) {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    getWishList(user)
      .then((dogsArray) => {
        setWishlist(dogsArray);
      });
  }, []);

  // console.warn(mergedData(user));
  return (
    <div className="this">
      <h2>Your Wishlist: </h2>
      <div className="card-container">
      {wishlist.map((dogInfo) => (
        <WishListCard
        key={dogInfo.firebaseKey}
        firebaseKey={dogInfo.firebaseKey}
        age ={dogInfo.age}
        breedId={dogInfo.breedId}
        status={dogInfo.status}
        name={dogInfo.name}
        description={dogInfo.description}
        imageUrl={dogInfo.imageUrl}
        setWishlist={setWishlist}
        wishlist={wishlist}
        user={user}
        />
      ))}
      </div>
    </div>
  );
}

WishList.propTypes = {
  user: PropTypes.any,

};

export default WishList;
