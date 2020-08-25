import React from 'react';
import './App.css';
import {yes,no} from './objects'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      statement: no["no-statment"],
      picture: no["no-image"]
    }
  }

  clickHandler = () => {
    let which = this.state.statement
    //console.log(which)
    if (which === yes["yes-statement"]) {
      which = {
        statement: no["no-statment"],
        picture: no["no-image"]
      }
    } else {
      which = {
        statement: yes["yes-statement"],
        picture: yes["yes-image"]
      }
    }
    this.setState({statement: which.statement, picture: which.picture})
  }

  render() {
    return (
      <div className='bigBox' onClick={this.clickHandler}>
        <h2>{this.state.statement}</h2>
        <img alt="" src={this.state.picture}></img>
      </div>
    )
  }
}

export default App;
