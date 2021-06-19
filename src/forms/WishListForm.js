import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form
} from 'reactstrap';
import { addWishList } from '../helpers/data/wishListData';
// import { funca } from '../helpers/data/wishListData';
// import { addWishList, funca } from '../helpers/data/wishListData';

const WishListForm = ({
  age,
  breedId,
  description,
  firebaseKey,
  imageUrl,
  name,
  status,
  user,
  dogId
}) => {
  const [wishLists, setWishLists] = useState({
    age: age || '',
    breedId: breedId || '',
    description: description || '',
    name: name || '',
    imageUrl: imageUrl || '',
    status: status || '',
    uid: user.uid || null,
    firebaseKey: firebaseKey || null,
    dogId: dogId || null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addWishList(wishLists, user)
      .then((dogsArray) => {
        setWishLists(dogsArray);
      });
  };

  // const handleInputChange = (e) => {
  //   setWishLists((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value
  //   }));
  // };
  // function refreshPage() {
  // window.location.reload();
  // }

  return (
    <div className='dForm'>
    <Form
    id='addDogForm'
    autoComplete='off'
    onSubmit={handleSubmit}
    >
        <h5>Add this dog to Wishlist? </h5>
        <Button type='submit'>Yes!</Button>
      </Form>
    </div>
  );
};

WishListForm.propTypes = {
  age: PropTypes.string,
  breedId: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.string,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  firebaseKey: PropTypes.string,
  setWishlist: PropTypes.func,
  user: PropTypes.any,
  dogId: PropTypes.string
};

export default WishListForm;
