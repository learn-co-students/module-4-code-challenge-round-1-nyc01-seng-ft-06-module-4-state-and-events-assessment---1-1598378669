import React from "react";
import { yes } from "./objects";
import { no } from "./objects";

class Image extends React.Component {
  state = {
    // yes: {
    //     src: yes["yes-image"],
    //     yes-statement: yes["yes-statement"]
    // },
    // no: {
    //     src: no["no-image"],
    //     no-statement: no ["yes-statement"]
    // },
    clicked: false,
  };

  clickHandler = () => {
    let clicked = this.state.clicked;
    this.setState({
      clicked: !clicked,
    });
  };

  render() {
    console.log(this.state.src);
    return (
      <div>
        {this.state.clicked ? (
          <div>
            <h1>{yes["yes-statement"]} </h1>
            <img
              onClick={this.clickHandler}
              src={yes["yes-image"]}
              alt="drake"
            ></img>
          </div>
        ) : (
          <div>
            <h1>{no["no-statement"]} </h1>
            <img
              onClick={this.clickHandler}
              src={no["no-image"]}
              alt="drake"
            ></img>
          </div>
        )}
      </div>
    );
  }
}

export default Image;
