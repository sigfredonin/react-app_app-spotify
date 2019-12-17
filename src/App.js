import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';
import Home from './containers/home';
import Profile from './containers/profile';
import SearchFrame from './containers/searchFrame';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/search' component={SearchFrame} />
        <Home />
      </Switch>
    </Router>
  );
}

export default App;
