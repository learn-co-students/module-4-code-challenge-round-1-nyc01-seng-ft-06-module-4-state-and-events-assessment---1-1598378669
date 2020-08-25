import { Component } from 'react';
import { yes, no } from './objects.js';

class ObjectsContainer extends Component {
    state = {
        clicked: false
    }

    clickHandler = () => {
    let clicked = this.state.clicked
    this.setState({clicked: !clicked }, () => console.log({yes}))
        }

    render(){
        return
    }
}

export  default ObjectsContainer;