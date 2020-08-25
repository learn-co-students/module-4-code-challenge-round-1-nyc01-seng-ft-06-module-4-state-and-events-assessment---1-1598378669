import React from 'react';

class Image extends React.Component {

    state = {
        hasBeenClicked: false
    }

    clickHandler = () => {
        this.setState({ hasBeenClicked: !this.state.hasBeenClicked }, () => console.log(this.state.hasBeenClicked));
    }

    render(){
        return <h1 onClick={this.clickHandler}>Image {this.props.value}</h1>
     }
}

export default Image;