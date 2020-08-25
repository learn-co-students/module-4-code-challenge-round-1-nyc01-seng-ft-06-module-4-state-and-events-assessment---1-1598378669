import React from 'react';
import './App.css';
import { yes, no } from './objects'

class App extends React.Component {
  
  state = {flag: "yes"}
  
  onclickHandler = () => {
    this.setState(previousState => {return previousState.flag === "yes" ? {flag:"no"} : {flag:"no"}})
  }
  
  render() {
    return (
      <React.Fragment>
      {this.state.flag === "yes" ? <h1>{yes["yes-statement"]}</h1> : <h1>{no["no-statement"]}</h1>}
      {this.state.flag === "yes" ? <img onClick={this.onclickHandler} alt={yes["yes-statement"]} src={yes["yes-image"]}/> : <img onClick={this.onclickHandler} alt={no["no-statement"]} src={no["no-image"]}/>}
      </React.Fragment>
    )
  }
}

export default App;
