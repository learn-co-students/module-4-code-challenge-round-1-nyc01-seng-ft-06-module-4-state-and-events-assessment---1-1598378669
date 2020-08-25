import React from 'react';
import './App.css';
import { yes, no } from './objects'

class App extends React.Component {

  state = {
    status: false
  }

  handleClick = () => {
    this.setState(previousStatus => {
      return {
        status: !previousStatus.status
      }
    }, () => console.log(this.state.status))
  }

  render(){
    return (
      <React.Fragment>
        {this.state.status ? <h1>{yes["yes-statement"]}</h1> : <h1>{no["no-statment"]}</h1>}
        <img src={this.state.status ? yes["yes-image"] : no["no-image"]} onClick={this.handleClick} alt="drake"/>
      </React.Fragment>
    )
  }
}

export default App;
