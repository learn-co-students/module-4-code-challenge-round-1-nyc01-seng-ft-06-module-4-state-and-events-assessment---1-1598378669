import React from 'react';
import { yes, no } from './objects.js'

class Image extends React.Component {

  state = {clicked: false}
    //set a default state so we can update it later

  clickHandler = () => {
    this.setState(previousState => {
      return {
        clicked: !previousState.clicked, 
      } 
    })
  }

  //set clickHandler - pass through previous state, update the 'clicked' key with the opposite of its previous value


  render(){
  return <div>
    <h1>You Can Do This!</h1>
    <img src={this.state.clicked ? yes["yes-image"] : no["no-image"]} onClick = {this.clickHandler} />
    <p>{this.state.clicked ? yes["yes-statement"] : no["no-statment"]}</p>
    </div>;
  }
}
//set image default, if clicked, invoke the click handler which switches the state


export default Image;