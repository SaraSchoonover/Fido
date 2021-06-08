import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import Routes from '../helpers/Routes';
import 'firebase/auth';
import './App.scss';
import NavBar from './components/NavBar';

function App() {
  const [admin, setAdmin] = useState(null);
  // const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
      } else if (admin || admin === null) {
        setAdmin(false);
      }
    });
  }, []);

  return (
    <>
    <NavBar />
    <Routes
       admin={admin}
      />
      </>
  );
}

export default App;
