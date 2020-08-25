import React from 'react';
import {yes} from './objects'
import {no} from './objects'

class Drake extends React.Component {
    
    state = {
        clicked: false
    }

    clickHandler = () => {
        let clicked = this.state.clicked
        this.setState({clicked: !clicked }, () => console.log({yes}))
        }
    


    
        
        render() {
        return(
            <div>
                <h2></h2>
                <img onClick={this.clickHandler} src= {yes}/>
            </div>
        )
    }
}

export default Drake