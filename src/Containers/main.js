import React from 'react';
import Statement from '../Components/statement'
import Image from '../Components/image'
import {yes, no} from '../objects'

class Main extends React.Component {
    
    state = {
        imageComp: { hasBeenClicked: '' }
    }

    clickHandler = () => {
        console.log(this.props)
        this.setState({ hasBeenClicked: !this.state.hasBeenClicked }, () => console.log(this.state.hasBeenClicked));
    }
    
    render(){
        return (
            <>
                <h1>Main</h1>
                <Statement value={yes["yes-statement"]}/>
                <Image clickHandler={this.clickHandler.bind(this)} value={yes["yes-image"]}/>
            </>
        )
    }
}

export default Main;