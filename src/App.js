import React from 'react';
import {yes, no} from './objects';

// import Main from './Containers/main';
import './App.css';

class App extends React.Component {
  state = {
    hasBeenClicked: false
  }

  renderMain = () => {
    const wasClicked = this.state.hasBeenClicked
    let image
    let statement
    
    if (wasClicked){
      image = yes["yes-image"]
      statement = yes["yes-statement"]

      return (
        <div>
          <h2>{statement}</h2>
          <img onClick={this.clickHandler}src={image}/>
        </div>
      )
    } else {
      image = no["no-image"]
      statement = no["no-statement"]
      
      return (
        <div>
          <h2>{statement}</h2>
          <img onClick={this.clickHandler}src={image}/>
        </div>
      )
    }  
  }

  clickHandler = () => {
        this.setState({ hasBeenClicked: !this.state.hasBeenClicked }, () => console.log(this.state.hasBeenClicked));
  }

  render(){
    return (this.renderMain());
  }
}

export default App;
