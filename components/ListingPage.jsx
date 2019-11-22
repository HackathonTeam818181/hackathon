import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ListingPage.css'
import data from '../data.json';

export default class ListingPage extends Component {
    state = {
        dataList: data,
        thisListing: data[this.props.match.params.id]
    }





    render() {
    console.log(this.state.thisListing)
        return (
            <div>
            
               <nav className='navbar'>
                <Link>
                 <img></img>
                </Link>  
                {/* <input name='search' type='text' className='search' placeholder=' Search'></input> */}
               </nav>
               <div className='theProperty'>
               <div className='propertyInfo'>
                 <h1 className='listingTitle'>{this.state.thisListing.Title}</h1>
                    {/* <li>{this.state.dataList.data}</li> */}
                   <div>

                   </div>
                   <button>

                   </button>
               </div>
               <div className='propertyPics'>
                   <img src={this.state.thisListing.Image[0]}></img>
                   <div className='imageIcons'>
                    <img className='eachImage' src={this.state.thisListing.Image[1]}></img>
                    <img className='eachImage' src={this.state.thisListing.Image[2]}></img>
                    <img className='eachImage' src={this.state.thisListing.Image[3]}></img>
                    <img className='eachImage' src={this.state.thisListing.Image[4]}></img>
                    <img className='eachImage' src={this.state.thisListing.Image[5]}></img>
                    <img className='eachImage' src={this.state.thisListing.Image[6]}></img>
                   </div>
               </div>
               </div>
               <footer>

               </footer>
            </div>
        )
    }
}
