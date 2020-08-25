import React from 'react';
import './App.css';
import {yes, no} from './objects'

class App extends React.Component {
  
  state = {
    yayOrNay: false
  }

  

  clickHandler = () => {
    
    let previousState = this.state.yayOrNay
    this.setState({
      yayOrNay: !previousState
    }, () => console.log(this.state))
  }

  
  render() {
    return (
      <div className="App">
      {this.state.yayOrNay === false ? <h1 className="no">{no["no-statment"]}</h1> : <h1 className="yes">{yes["yes-statement"]}</h1> }
       {this.state.yayOrNay === false ? <img className="no" onClick={this.clickHandler} alt={no["no-statement"]} src={no["no-image"]} /> : <img className="yes" onClick={this.clickHandler} alt={yes["yes-statement"]} src={yes["yes-image"]} />}
      </div>
    )
  }
  
  
}

export default App;
