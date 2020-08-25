import React from 'react';
import './App.css';
import {yes, no} from './objects'

class App extends React.Component {

constructor() {
    super()
  this.state = {
    clicked: false
  }
} 

clickHandler = () => {
    let clicked = this.state.clicked
    this.setState({ clicked: !clicked })
  }

  let yesImg = yes["yes-image"]
  let noImg = no["no-image"]

  let yesStatement = yes["yes-statement"]
  let noStatement = no['no-statement']
  console.log("noStatment", noStatement)

  render(){
    
  if (this.state.clicked){
     return ( <h1>{yesStatement}</h1>,
           <img onClick={this.clickHandler} src={yesImg} />
   )}
  else {
      return ( <h1>{noStatement}</h1>,
        <img onClick={this.clickHandler} src={noImg} />
      )}
  }
         
}

export default App;
