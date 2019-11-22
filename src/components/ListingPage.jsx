import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ListingPage.css'
import data from '../data.json';

export default class ListingPage extends Component {
    state = {
        dataList: data
    }


    render() {
    
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
                    {/* <li>{this.state.dataList.data}</li> */}
                   <div>

                   </div>
                   <button>

                   </button>
               </div>
               <div className='propertyPics'></div>
               </div>
               <footer>

               </footer>
            </div>
        )
    }
}
