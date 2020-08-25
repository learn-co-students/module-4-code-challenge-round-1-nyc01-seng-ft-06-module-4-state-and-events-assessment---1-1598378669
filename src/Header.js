import React from 'react'
import {yes, no} from './objects.js'



class Header extends React.Component {
    

    render() {

        

        return (
            <div>
               <h1>{no["no-statement"]}</h1> 
               <h1>{yes["yes-statement"]}</h1>
              
            </div>
        )
    }
}

export default Header


