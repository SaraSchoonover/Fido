import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import WishList from '../views/WishList';
import Dogs from '../views/Dogs';
import DogForm from '../forms/DogForm';

export default function Routes({ setDogs }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />

        <Route
        path='/dogs'
        component={() => <Dogs
          />}
        />

        <Route
          path='/wishlist'
          component={WishList}
        />

        <Route
          path='/add-dog'
          component={() => <DogForm
              setDogs={setDogs}
          />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  setDogs: PropTypes.func,
  // admin: PropTypes.any
};
