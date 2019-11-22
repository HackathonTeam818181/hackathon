import React, { Component } from 'react';
import data from './data.json';
import ListingPage from './components/ListingPage'


export default class App extends Component {

state= {
 dataList: data
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
