import React, { useState, useEffect } from 'react';
import WishListCard from '../App/components/WishListCard';
import { getWishList } from '../helpers/data/wishListData';

function WishList() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    getWishList()
      .then((dogsArray) => {
        setWishlist(dogsArray);
      });
  }, []);

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
        setWishList={setWishlist}
        WishList={wishlist}
        />
      ))}
      </div>
    </div>
  );
}

export default WishList;
