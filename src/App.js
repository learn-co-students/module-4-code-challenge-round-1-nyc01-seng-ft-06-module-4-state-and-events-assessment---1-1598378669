import React, { Component } from 'react';
import './App.css';
import {yes,no} from './objects.js'



class App extends React.Component {

  state = {
    answer: "yes"
  }

  click = () => {
    this.setState(currentState => {
      return{
        answer: !currentState.answer
      }
    }, 
    () => console.log(this.state.answer))
  }

  render(){  
    return (
      <div className=".App">
        {this.state.answer === "yes" ? <h1>{yes["yes-statement"]}</h1> : <h1>{no["no-statment"]}</h1>}
        {this.state.answer === "yes" ? <img alt={yes["yes-statement"]} src={yes["yes-image"]} onClick={this.click} />: <img  alt={no["no-statement"]} src={no["no-image"]} onClick={this.click} />}
      </div>
    )
  }

}
export default App;
