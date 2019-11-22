import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home'
import ListingPage from './components/ListingPage';
import {Route, Link, Switch} from 'react-router-dom'
import home from './components/home';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/listing/:id" component={ListingPage} />
      </Switch>
    </div>
  );
}



