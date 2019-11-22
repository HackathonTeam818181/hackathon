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

                <div className="navbar navbar-default navbar-fixed-top">

                </div>
                <div className="body">
                    <div className="listings pre-scrollable">
                        <Listing data={this.state.data}/>
                    </div>
                    <div className="map-section">
                        <div className="map-filters">

                       
                        </div>
                        <div className="map">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
