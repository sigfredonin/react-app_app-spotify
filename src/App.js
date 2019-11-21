import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';
import Home from './containers/home.js';
import Search from './containers/search.js';
import Profile from './containers/profile.js';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/search' component={Search} />
        <Home />
      </Switch>
    </Router>
  );
}

export default App;
