import React from 'react';
import './App.css';
import {yes,no} from './objects.js'

class App extends React.Component {

  state = {
    condition: "yes"
  }

  clickHandler = () => {
    this.setState(previousState => {
      if (previousState.condition === "yes") {
        return {condition:"no"}
      } else { 
        return {condition: "yes"}
      }
    })
  }

  render(){  
    return (
      <div>
        {this.state.condition === "yes" ? <h3>{yes["yes-statement"]}</h3> : <h3>{no["no-statement"]}</h3>}
        {this.state.condition === "yes" ? <img alt={yes["yes-statement"]} src={yes["yes-image"]} onClick={this.clickHandler} />: <img alt={no["no-statement"]} src={no["no-image"]} onClick={this.clickHandler} />}
      </div>
    )
  }

}

export default App;
