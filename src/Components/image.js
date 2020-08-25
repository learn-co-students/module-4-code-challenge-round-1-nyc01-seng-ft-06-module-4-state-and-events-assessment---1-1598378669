import React from 'react';

class Image extends React.Component {

    state = {
        hasBeenClicked: false
    }

    // clickHandler = () => {
    //     console.log(this.props)
    //     this.setState({ hasBeenClicked: !this.state.hasBeenClicked }, () => console.log(this.state.hasBeenClicked));
    // }

    render(){
        console.log(this.props)
        return <h1 onClick={this.props.clickHandler}>Image {this.props.value}</h1>
     }
}

export default Image;