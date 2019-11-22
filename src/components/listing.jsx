import React, { Component } from 'react'

export default class listing extends Component {

    returnAll = () =>{
        let data = this.props.data
        console.log(data[0].Title)
        return data.map(each=>{
            return(
                <div className="one-listing">
                    {each.Title}
                </div>
            )
        })
    }
    
    render() {
        return (
            <div className="all-shit">
               {this.returnAll()}
            </div>
        )
    }
}
