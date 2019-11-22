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
                        <img src={require("../Logo.png")} className="kaka"/>
                    </div>
                    <div>
                        <input type="text" onSubmit={()=>{this.filterList()}} className="searchbar" placeholder="SEARCH"></input>
                        <button className="search-button" onClick={()=>{this.filterList()}}>SEARCH</button>
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
                            <p className="bold">PRICE</p>
                            <p className="bold">BED</p>
                            <p className="bold">BATH</p>
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
