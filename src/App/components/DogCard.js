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
// import DogForm from '../../forms/DogForm';
// import { addWishList } from '../../helpers/data/wishListData';
import WishListForm from '../../forms/WishListForm';
import DogCardForm from '../../forms/DogCardForm';

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
  admin,
  user,
  uid,
  isFavorited,
  setDog
}) => {
  const [editing, setEditing] = useState(false);
  // const history = useHistory();

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
      <Button style={{ backgroundColor: '#FFFFFF', color: '#28282B', border: '#FFFFFF' }} onClick={() => handleClick(fbKey, 'delete')}><i className="far fa-trash-alt"></i></Button>
      <Button style={{ backgroundColor: '#FFFFFF', color: '#28282B', border: '#FFFFFF' }}
       onClick={() => handleClick(fbKey, 'edit')}>
      <i className="far fa-edit"></i>
    {editing ? 'Close Form' : ' '}
    </Button>
    </div>
  );

  const userCard = (fbKey) => (
    <div className='editbtns'>
      <Button style={{ backgroundColor: '#aec5eb', color: '#FFFFFF', border: '#FFFFFF' }}
       onClick={() => handleClick(fbKey, 'addToWishList')}> {adding ? 'Not Right Now' : 'Add To Wishlist'}</Button>
    </div>
  );

  return (
      <Card className='dogCard'>
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Age: {age}</CardSubtitle>
        </CardBody>
        <img width="100%" src={imageUrl} alt="Card image cap" />
        <CardBody>
          <CardText>{description}</CardText>
          <CardText>Status: {status}</CardText>
          <CardText>Breed: {breedId}</CardText>
          { admin && editCard(firebaseKey) }
          { isFavorited ? 'Added!' : user && userCard(firebaseKey) }
          { editing && <DogCardForm
              age={age}
              breedId={breedId}
              description={description}
              firebaseKey={firebaseKey}
              imageUrl={imageUrl}
              name={name}
              status={status}
              setDogs={setDogs}
              setWishlist={setWishlist}
              uid={uid}
              isFavorited={isFavorited}
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
              user={user}
              uid={uid}
              dogId={firebaseKey}
              setDog={setDog}
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
  admin: PropTypes.any,
  user: PropTypes.any,
  uid: PropTypes.any,
  isFavorited: PropTypes.bool,
  setDog: PropTypes.func
};

export default DogCard;
