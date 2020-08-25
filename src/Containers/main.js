import React from 'react';
import Statement from '../Components/statement'
import Image from '../Components/image'
import {yes, no} from '../objects'

class Main extends React.Component {

    state = {
        imgHasBeenClicked: false 
    }
    
    imgClickHandler = () => {
        return this.setState({ imgHasBeenClicked: !this.state.imgHasBeenClicked }, () =>{
            console.log(this.state.imgHasBeenClicked)
            return this.state.imgHasBeenClicked
        });
    }

    renderMainController = () => {
        if (this.state.imgHasBeenClicked) {
            return (
                <>
                    <h1>The Main Container</h1>
                    <Statement statement={yes["yes-statement"]} />
                    <Image forClick={this.imgClickHandler} imageUrl={yes["yes-image"]}/>
                </>
            )
        } else {
            return ( 
            <>
                <h1>The Main Container</h1>
                <Statement statement={no["no-statement"]} />
                <Image forClick={this.imgClickHandler} imageUrl={no["no-image"]}/>
            </>)
        }
    }
    
    render(){
        return this.renderMainController()
    }
}

export default Main;