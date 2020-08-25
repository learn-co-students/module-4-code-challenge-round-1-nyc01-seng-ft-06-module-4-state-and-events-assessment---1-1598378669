import React from 'react'
import {yes, no} from './objects.js'




class Yesnoimg extends React.Component {

    state = {clicked: "yes"}

    clickHandler = () => {
        console.log("clicked")
    }

    render() {
        
        return (
            <div>
               <img onClick={this.clickHandler} alt={no["yes-image"]} src={no["yes-image"]} />
               <img onClick={this.clickHandler} alt={no["no-image"]} src={no["no-image"]} />
            </div>
        )
    }
}

export default Yesnoimg
