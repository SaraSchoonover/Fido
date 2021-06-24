import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardSubtitle,
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteWishList } from '../../helpers/data/wishListData';

const WishListCard = ({
  age,
  breedId,
  description,
  imageUrl,
  name,
  status,
  firebaseKey,
  setWishlist,
  user,
}) => {
  const handleClick = (fbKey, type) => {
    if (type === 'delete') {
      deleteWishList(fbKey, user)
        .then(setWishlist);
    }
  };

  const deleteCard = (fbKey) => (
    <div className='userDelete'>
      <Button style={{ backgroundColor: '#aec5eb', border: '#FFFFFF' }}
      onClick={() => handleClick(fbKey, 'delete')}><i className="far fa-trash-alt"></i> Delete</Button>
    </div>
  );

  return (

      <Card>
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{age}</CardSubtitle>
        </CardBody>
        <img width="100%" src={imageUrl} alt="Card image cap" />
        <CardBody>
          <CardText>{description}</CardText>
          <CardText>{status}</CardText>
          <CardText>{breedId}</CardText>
          { deleteCard(firebaseKey) }
          </CardBody>

      </Card>
  );
};

WishListCard.propTypes = {
  age: PropTypes.string,
  breedId: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  setWishlist: PropTypes.func,
  firebaseKey: PropTypes.string,
  user: PropTypes.any,
  isFavorited: PropTypes.bool
};

export default WishListCard;
