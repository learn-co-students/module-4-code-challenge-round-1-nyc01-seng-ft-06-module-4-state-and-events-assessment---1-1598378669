import React from 'react';
import Statement from './statement'
import { yes } from './objects'
import { no } from './objects'

//Note: I had the setup right but got stuck on referencing the key with dot notation for like 25 mins

class Image extends React.Component {
    
    state = {
        beenClicked: false,
        image: no["no-image"],
        statement: no["no-statement"]
    }
    
    clickHandler = () => {
        if(this.state.beenClicked === false){
            this.setState({beenClicked: true, image: yes["yes-image"], statement: yes["yes-statement"]})
        } else {
            this.setState({beenClicked: false, image: no["no-image"], statement: no["no-statement"]})
        }
    }

    render(){
        
        return (
            <>
                <Statement statementText={this.state.statement}/>
                <img onClick={this.clickHandler} src={this.state.image}/>
            </>
        )
        }
}

export default Image