import React, { Component } from "react";
import Box from "./box";
import "./boxContainer.css";

class BoxContainer extends Component {
  static defaultProps = {
    boxNum: 80,

    allColors: [
      "red",
      "blue",
      "black",
      "orange",
      "yellow",
      "pink",
      "white",
      "grey",
    ],
  };
  render() {
    const boxes = Array.from({ length: this.props.boxNum }).map(() => (
      <Box colors={this.props.allColors} />
    ));

    return <div className="box__container">{boxes}</div>;
  }
}

export default BoxContainer;
