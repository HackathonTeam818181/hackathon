<<<<<<< HEAD
import React, { Component } from 'react';
import data from './data.json';
import ListingPage from './components/ListingPage'


export default class App extends Component {

state= {
 dataList: data
=======
import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home'

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
>>>>>>> 1b2460be80aebafc098071bf3c4b753af5055ae0
}



  render() {
    console.log(this.state.dataList)
    return (
      <div>
        <ListingPage />
      </div>
    )
  }
}
