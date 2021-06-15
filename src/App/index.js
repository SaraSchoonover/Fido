import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import Routes from '../helpers/Routes';
import 'firebase/auth';
import './App.scss';
import NavBar from './components/NavBar';
import { getDogs } from '../helpers/data/dogData';

function App() {
  const [admin, setAdmin] = useState(null);
  const [dogs, setDogs] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
        getDogs().then((dogsArray) => setDogs(dogsArray));
      } else if (admin || admin === null) {
        setAdmin(false);
        getDogs().then((dogsArray) => setDogs(dogsArray));
      }
    });
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
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
       dogs={dogs}
       setDogs={setDogs}
      />
      </>
  );
}

export default App;
