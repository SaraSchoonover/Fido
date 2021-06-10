import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form
} from 'reactstrap';
import { addWishList } from '../helpers/data/wishListData';

const WishListForm = ({
  age,
  breedId,
  description,
  firebaseKey,
  imageUrl,
  name,
  status,
}) => {
  const [wishLists, setWishLists] = useState({
    age: age || '',
    breedId: breedId || '',
    description: description || '',
    name: name || '',
    imageUrl: imageUrl || '',
    status: status || '',
    firebaseKey: firebaseKey || null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addWishList(wishLists)
      .then((dogsArray) => {
        setWishLists(dogsArray);
      });
  };
  console.warn(setWishLists);

  // const handleInputChange = (e) => {
  //   setWishLists((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value
  //   }));
  // };

  return (
    <div className='dForm'>
    <Form
    id='addDogForm'
    autoComplete='off'
    onSubmit={handleSubmit}
    >
        <h2>Add dog to wishlist? </h2>
        <Button type='submit'>Add</Button>
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

};

export default WishListForm;
