import React, { Component } from 'react'

export default class listing extends Component {

    returnAll = () =>{
        let data = this.props.data
        console.log(data[0].Title)
        return data.map(each=>{
            return(
                <div className="one-listing">
                <div className="image-container">
                
                    <img src={each.Image[0]} />
                </div>
                <div>
                    {each.Title}
                </div>
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
