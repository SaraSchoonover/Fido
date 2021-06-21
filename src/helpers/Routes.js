import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import WishList from '../views/WishList';
import Dogs from '../views/Dogs';
import AboutUs from '../views/AboutUs';
import DogForm from '../forms/DogForm';

export default function Routes({ setDog, admin, user }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />

        <Route
        exact path='/dogs'
        component={() => <Dogs
          admin={admin}
          user={user}
          setDog={setDog}
          />}
        />

        <Route
          exact path='/wishlist'
          component={() => <WishList
            user={user}
          />}
        />

        <Route
          path='/about-us'
          component={AboutUs}
        />

        <Route
          path='/add-dog'
          component={() => <DogForm
              setDog={setDog}
              admin={admin}
          />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  setDog: PropTypes.func,
  admin: PropTypes.any,
  user: PropTypes.any
};
