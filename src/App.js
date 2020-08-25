import React, { Component } from 'react';
import './App.css';
import Header from "./Header.js"
import Yesnoimg from "./Yesnoimg.js"
//import {yes, no} from "./objects.js"

//i think refactoring this i would put everything in the app one and have it handle everything rather than create 2 
//seperate components since they both have to speak to eachother

class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <Yesnoimg />
      </div>
    )
  }
}

export default App;
