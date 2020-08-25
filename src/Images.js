import React from 'react';
import {yes} from './objects.js'
import {no} from './objects.js'

class Images extends React.Component{

    state = {clicked: false}

    clickHandler = () => {
        this.setState({ 
            clicked: !this.state.clicked
        }, console.log(this.state)) }
    
        render() {
            // console.log(this.state.clicked)
            let state = this.state.clicked
            if(state === true) {

                return ( <div className="Images">
            <h1>{yes["yes-statement"]}</h1>
            <img onClick={this.clickHandler} src= { yes["yes-image"] } />
            
         </div>
            )
        }else if(state === false) {
            return ( <div className="Images">
            <h1>{no["no-statement"]}</h1>
            <img onClick={this.clickHandler} src= { no["no-image"] } />
            
         </div>
            )
        }
    }
    
}

export default Images



