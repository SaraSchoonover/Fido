import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import WishList from '../views/WishList';
// import PropTypes from 'prop-types';

export default function Routes() {
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

        />
      </Switch>
    </div>
  );
}
