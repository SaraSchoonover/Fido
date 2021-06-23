import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, FormGroup, Input, Label
} from 'reactstrap';
import { addDogs, updateDogs } from '../helpers/data/dogData';

const DogCardForm = ({
  age,
  breedId,
  description,
  firebaseKey,
  imageUrl,
  name,
  status,
  setDogs,

}) => {
  const [dog, setDog] = useState({
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
    if (dog.firebaseKey) {
      updateDogs(dog).then(setDogs);
    } else {
      addDogs(dog).then(setDogs);
    }
  };

  const handleInputChange = (e) => {
    setDog((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'age' ? Number(e.target.value) : e.target.value
    }));
  };

  return (
    <div className='dcForm'>
    <Form
    id='addDogForm'
    autoComplete='off'
    onSubmit={handleSubmit}
    >
        <h2>Add Dog Form: </h2>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            name='name'
            id='name'
            value={dog.name}
            type='text'
            placeholder='Enter a Pup'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age:</Label>
          <Input
            name='age'
            id='age'
            value={dog.age}
            type='text'
            placeholder='Enter an age'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="breed">Breed:</Label>
          <Input
            name='breedId'
            id='breed'
            value={dog.breedId}
            type='text'
            placeholder='Enter a breed'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="description">Description:</Label>
          <Input
            name='description'
            id='description'
            value={dog.description}
            type='text'
            placeholder='Enter a description'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="status">Status:</Label>
          <Input
            name='status'
            id='status'
            value={dog.status}
            type='status'
            placeholder='Enter status'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="imageUrl">Image:</Label>
          <Input
            name='imageUrl'
            id='imageUrl'
            value={dog.imageUrl}
            type='imageUrl'
            placeholder='Enter Image'
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button style={{ backgroundColor: '#aec5eb' }} type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

DogCardForm.propTypes = {
  age: PropTypes.string,
  breedId: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.string,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  firebaseKey: PropTypes.string,
  setDogs: PropTypes.func,
  admin: PropTypes.any
};

export default DogCardForm;
