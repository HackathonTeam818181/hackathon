import React, { Component } from 'react';
import {Link, Route,} from 'react-router-dom'

export default class listing extends Component {


    returnAll = () =>{
        let data = this.props.data
        console.log(data[0].Title)
        return data.map((each, i)=>{
            return(
                <Link to={'/listing/' + i} className='link' >

                <div className="one-listing">
                    {each.Title}
                </div>
                </Link>
            )
        })
    }
    
    render() {
        console.log()
        return (
            <div className="all-shit">
               {this.returnAll()}
            </div>
        )
    }
}
