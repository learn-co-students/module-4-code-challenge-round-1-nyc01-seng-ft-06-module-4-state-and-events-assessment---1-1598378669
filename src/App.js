import React, { Component } from 'react';
import './App.css';
import './objects.js'
import './ObjectsContainer.js'
import ObjectsContainer from './ObjectsContainer.js'

class App extends Component {
  render(){

    return( 
    <div>
    <h1>You Can Do This!</h1>
    < ObjectsContainer />
    </div>
    )
  }
}

export default App;

//APP
// |
// |
// object.js