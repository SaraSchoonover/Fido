import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  user,
  dogId,
}) => {
  const history = useHistory();
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
      .then(() => {
        setWishLists();
        history.push('/wishlist');
      });
  };

  return (
    <div className='wForm'>
    <Form
    id='addDogForm'
    autoComplete='off'
    onSubmit={handleSubmit}
    >
        <h5>Add this dog to your Wishlist? </h5>
        <Button style={{ backgroundColor: '#aec5eb' }}
        type='submit'>Yes!</Button>
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
  dogId: PropTypes.string,
};

export default WishListForm;
