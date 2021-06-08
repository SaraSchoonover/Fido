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

  return (
    <>
    <NavBar admin={admin}/>
    <Routes
       admin={admin}
       dogs={dogs}
       setDogs={setDogs}
      />
      </>
  );
}

export default App;
