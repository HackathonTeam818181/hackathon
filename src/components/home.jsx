import React, { Component } from 'react'
import Listing from '../components/listing'
import data from "../data"

export default class home extends Component {


    constructor(props){
        super(props)
        this.state = {
            data: data
        }
    }

    render() {
        console.log(this.state.data)
        return (
            <div className = "whole">

                <div className="the-navbar navbar navbar-default navbar-fixed-top">
                    <div>
                        LOGO
                    </div>
                    <div>
                        <input type="text" className="searchbar" placeholder="SEARCH"></input>
                        <button className="search-button">SEARCH</button>
                    </div>
                    <div >
                    </div>
                    <div>
                        Log in
                    </div>
                </div>
                <div className="body">
                    <div className="listings pre-scrollable">
                        <Listing data={this.state.data}/>
                    </div>
                    <div className="map-section">
                        <div className="first-filters">
                            <p>Price</p>
                            <p>Bed</p>
                            <p>Bath</p>
                        </div>
                        <div className="filter-button">
                            <button onClick = {this.startModal}>FILTER</button>
                        </div>
                        <div className="map">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
