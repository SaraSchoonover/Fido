import React, { useState } from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardBody,
  CardSubtitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteDogs } from '../../helpers/data/dogData';
import DogForm from '../../forms/DogForm';
// import { addWishList } from '../../helpers/data/wishListData';
import WishListForm from '../../forms/WishListForm';

const DogCard = ({
  age,
  breedId,
  description,
  firebaseKey,
  imageUrl,
  name,
  status,
  setDogs,
  setWishlist,
}) => {
  const [editing, setEditing] = useState(false);

  const [adding, setAdding] = useState(false);

  const handleClick = (fbKey, type) => {
    switch (type) {
      case 'addToWishList':
        setAdding((prevState) => !prevState);
        break;
      case 'delete':
        deleteDogs(fbKey)
          .then((dogsArray) => setDogs(dogsArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
    }
  };

  const editCard = (fbKey) => (
    <div className='editbtns'>
      <Button
       onClick={() => handleClick(fbKey, 'addToWishList')}> Add To Wishlist</Button>
      <Button onClick={() => handleClick(fbKey, 'delete')}><i className="far fa-trash-alt"></i> Delete</Button>
      <Button
       onClick={() => handleClick(fbKey, 'edit')}>
      <i className="far fa-edit"></i>
    {editing ? 'Close Form' : ' Edit'}
    </Button>
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
          { editCard(firebaseKey) }
          { editing && <DogForm
              age={age}
              breedId={breedId}
              description={description}
              firebaseKey={firebaseKey}
              imageUrl={imageUrl}
              name={name}
              status={status}
              setDogs={setDogs}
              setWishlist={setWishlist}
          /> }
          { adding && <WishListForm
              age={age}
              breedId={breedId}
              description={description}
              firebaseKey={firebaseKey}
              imageUrl={imageUrl}
              name={name}
              status={status}
              setDogs={setDogs}
              setWishlist={setWishlist}
          /> }
          </CardBody>
      </Card>

  );
};

DogCard.propTypes = {
  setDogs: PropTypes.func,
  setWishlist: PropTypes.func,
  age: PropTypes.string,
  breedId: PropTypes.string,
  description: PropTypes.string,
  firebaseKey: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  // admin: PropTypes.any
};

export default DogCard;
