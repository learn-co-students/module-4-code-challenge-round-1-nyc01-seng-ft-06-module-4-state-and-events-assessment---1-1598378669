import React, { Component } from 'react';
import './App.css';
import { yes, no } from './objects.js'

class App extends Component {

  state = {clicked: false}

  clickHandler=()=>{
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    let statement = this.state.clicked ? yes['yes-statement'] : no['no-statment']
    let image = this.state.clicked ? yes['yes-image'] : no['no-image']

    return (
      <div>
        <h1 className="App-logo">{statement}</h1>
        <img onClick={this.clickHandler}src={image}/>
      </div>
    )
  }
}

export default App;
