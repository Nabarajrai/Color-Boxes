import React, { Component } from "react";
import "./App.css";

export class Boxes extends Component {
  render() {
    return (
      <div className="App">
        <div
          style={{
            width: `${this.props.width}em`,
            height: `${this.props.height}em`,
            backgroundColor: this.props.color,
          }}
        />
        <button onClick={this.props.removes}>X</button>
      </div>
    );
  }
}

export default Boxes;
