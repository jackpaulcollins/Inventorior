import React from 'react';
import Nav from './components/Nav'
import ItemField from './components/ItemField'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import ItemDetailPage from './components/ItemDetailPage';

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Route exact path='/' component={ItemField} />
        <Route exact path='/item/:id' component={ItemDetailPage} />
      </Router>
    </div>
  );
}

export default App;
