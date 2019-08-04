import React from 'react';
import Nav from './components/Nav'
import ItemField from './components/ItemField'
import './App.css';
import firebaseConfig from './constants/firebaseConfig';
import firebase from 'firebase';



function App() {
  firebase.initializeApp(firebaseConfig);
  return (
    <div className="App">
      <Nav />
      <ItemField />
    </div>
  );
}

export default App;
