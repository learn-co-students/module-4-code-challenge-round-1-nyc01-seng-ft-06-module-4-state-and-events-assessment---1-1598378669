import React from 'react';

class Image extends React.Component {


    clickHandler = () => {
        this.props.forClick()
    }

    render(){
        return (<img onClick={this.clickHandler} src={this.props.imageUrl} alt=""/>)
     }
}

export default Image;