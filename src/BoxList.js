import React, { Component } from "react";
import Boxe from "./Boxes";
import NewBoxGenerator from "./newBoxGenerator";
export class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
  }
  createBox = (newObj) => {
    this.setState({ boxes: [...this.state.boxes, newObj] });
  };
  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter((box) => box.id !== id),
    });
  }
  render() {
    const boxeses = this.state.boxes.map((box) => (
      <Boxe
        key={box.id}
        id={box.id}
        width={box.width}
        height={box.height}
        color={box.color}
        removes={() => this.remove(box.id)}
      />
    ));
    return (
      <div>
        <h1>Color Maker Boxes</h1>
        <NewBoxGenerator newBox={this.createBox} />
        {boxeses}
      </div>
    );
  }
}

export default BoxList;
