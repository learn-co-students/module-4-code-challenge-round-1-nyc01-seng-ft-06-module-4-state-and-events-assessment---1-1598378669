import React from 'react';
import './App.css';
import {yes,no} from './objects.js'

class App extends React.Component {

  obj = {
    yes: {
      "image": yes["yes-image"],
      "statement": yes["yes-statement"]
    },
    no: {
      "image": no["no-image"],
      "statement": no["no-statement"]
    } 
  }

  state = {
    condition: "yes"
  }

  clickHandler = () => {
    this.setState(previousState => {
      if (previousState.condition === "yes") {
        return {condition: "no"}
      } else { 
        return {condition: "yes"}
      }
    })
  }

  render(){  
    return (
      <div className=".App">
         <h3>{this.obj[this.state.condition].statement}</h3> 
         <img alt={this.obj[this.state.condition].image} src={this.obj[this.state.condition].image} onClick={this.clickHandler} />
      </div>
    )
  }
}

export default App;
