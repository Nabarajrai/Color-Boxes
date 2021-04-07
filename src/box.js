import React, { Component } from "react";
import "./box.css";
import { choice } from "./helper";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = { color: choice(this.props.colors) };
  }

  generateColor = () => {
    let newColor;
    do {
      newColor = choice(this.props.colors);
    } while (newColor === this.state.color);
    this.setState({ color: newColor });
  };

  handleColor = () => {
    this.generateColor();
  };

  render() {
    return (
      <div>
        <div
          onClick={this.handleColor}
          className="color"
          style={{ backgroundColor: this.state.color }}
        ></div>
      </div>
    );
  }
}

export default Box;
