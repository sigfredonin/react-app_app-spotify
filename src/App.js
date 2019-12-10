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
        <Route exact path='/home' component={Home} />
        <Route path='/profile/:id' component={Profile} />
        <Route path='/search/:id' component={SearchFrame} />
        <Home />
      </Switch>
    </Router>
  );
}

export default App;
