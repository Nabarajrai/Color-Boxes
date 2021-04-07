import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export class newBoxGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", color: "" };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newObj = { ...this.state, id: uuidv4() };
    this.props.newBox(newObj);
    this.setState({ height: "", width: "", color: "", id: uuidv4() });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="height">Height:</label>
            <input
              type="text"
              name="height"
              value={this.state.height}
              placeholder="height"
              id="height"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="width">Width:</label>
            <input
              type="text"
              name="width"
              value={this.state.width}
              placeholder="width"
              id="width"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="color">Color:</label>
            <input
              type="text"
              name="color"
              value={this.state.color}
              placeholder="color"
              id="color"
              onChange={this.handleChange}
            />
          </div>
          <button>Add new box</button>
        </form>
      </div>
    );
  }
}

export default newBoxGenerator;
