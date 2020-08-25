import React from 'react';
import './App.css';
import Statment from './Components/Statement'
import Decision from './Components/Decision';

export default class App extends React.Component {
    state = {
      isClicked: false
  }

  clickHandler = (value) => {
      console.log(value)
      this.setState({isClicked: value})
  }

  render() {
  return  <div>
    <Statment statement={this.state.isClicked}/>
    <Decision onClick={this.clickHandler}/>
  </div>
  }
}

