import React from 'react';
import './App.css';
import { yes, no } from './objects'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      statementStatus: false,
      imgUrl: no["no-image"],
      statement: no["no-statment"]
    }

  }

  toggleImage = () => {
    if (this.state.statementStatus === false) {
      this.setState({
        statementStatus: true,
        imgUrl: yes["yes-image"],
        statement: yes["yes-statement"]

      }, () => console.log(this.state.statementStatus))
    } else {
      this.setState({
        statementStatus: false,
        imgUrl: no["no-image"],
        statement: no["no-statment"]
      }, () => console.log(this.state.statementStatus, this.state.imgUrl))
    }
  }

  render(){
    return (
        <div className="container">
          <button className="statement" onClick={this.toggleImage}>{this.state.statement}</button>
          <div className="image-container"><img src={this.state.imgUrl} alt="drake"/></div>
        </div>
    )
  }
}

export default App;
