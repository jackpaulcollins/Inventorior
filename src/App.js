import React from 'react';
import Nav from './components/Nav'
import ItemField from './components/ItemField'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import ItemDetailPage from './components/ItemDetailPage';
import firebaseConfig from './constants/firebaseConfig';
import firebase from 'firebase';


function App() {
  firebase.initializeApp(firebaseConfig);
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path='/' component={ItemField} />
        <Route exact path='/item/:id' params={{id: ''}} component={ItemDetailPage} />
      </Router>
    </div>
  );
}

export default App;
