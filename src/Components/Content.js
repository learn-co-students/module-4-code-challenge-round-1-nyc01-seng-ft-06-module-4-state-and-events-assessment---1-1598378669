// import React from 'react';
import React, { Component } from "react";


class Content extends Component {

    state = {
    clicked: false
    }

    clickHandler = () => {
    let clicked = this.state.clicked
    this.setState({ clicked: !clicked }, () => console.log("new state: ", this.state))
    }

    render () {
        let {yes_data} = this.props
        let {no_data} = this.props

    return (
        <div>
        {this.state.clicked ? <h2>{yes_data["yes-statement"]}</h2> : <h2>{no_data["no-statement"]}</h2>}
        {this.state.clicked? <img onClick={this.clickHandler} alt="me" src={yes_data["yes-image"]}/> : <img onClick={this.clickHandler} alt="me" src={no_data["no-image"]}/>}/> 
        </div>
        )

    }
    
}

export default Content;

