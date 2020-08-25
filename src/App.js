import React from 'react';
import './App.css';
import {yes, no} from './objects.js'

class App extends React.Component {
  state = {
    yes: true
  }
  
  clickHandler = () => {
    let yesOrNo = !this.state.yes

    this.setState({
      yes: yesOrNo
    })
  }

  render() {
    return (
      <div>
        {this.state.yes ? <h1>Yes</h1> : <h1>No</h1>}
        {this.state.yes ? <img src={yes['yes-image']} alt="yes" onClick={this.clickHandler}></img> : <img src={no['no-image']} alt="no" onClick={this.clickHandler}></img>}
      </div>
    )
  }
}

export default App;
