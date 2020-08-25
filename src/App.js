// import React from 'react';
import React, { Component } from "react";
import './App.css';
import { yes, no } from './objects'
import Content from './Components/Content'


class App extends Component {
  render () {

    
    return (
      <div>
      <h1>Another super useful application I built</h1>
      <Content yes_data={yes} no_data={no}/>
      </div>
      )

  }
    
}

export default App;
