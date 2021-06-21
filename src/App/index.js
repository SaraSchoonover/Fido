import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import Routes from '../helpers/Routes';
import 'firebase/auth';
import './App.scss';
import NavBar from './components/NavBar';
import { getDogs } from '../helpers/data/dogData';

function App() {
  const [admin, setAdmin] = useState(null);
  const [dog, setDog] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
        getDogs().then((dogsArray) => setDog(dogsArray));
      } else if (admin || admin === null) {
        setAdmin(false);
        getDogs().then((dogsArray) => setDog(dogsArray));
      }
    });
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid !== process.env.REACT_APP_ADMIN_UID)) {
        const userObj = {
          // fullName: authed.displayName,
          // profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email
        };
        setUser(userObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
    <NavBar
      admin={admin}
      user={user}
      />
    <Routes
       user={user}
       admin={admin}
       dog={dog}
       setDog={setDog}
      />
      </>
  );
}

export default App;
