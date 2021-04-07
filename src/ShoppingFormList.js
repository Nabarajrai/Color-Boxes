import React, { Component } from "react";

export default class ShoppingFormList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      qty: "",
    };
  }
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.itemAdd(this.state);
    this.setState({ name: "", qty: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onInput={this.handleChange}
          />
          <label htmlFor="qty">Qty:</label>
          <input
            type="text"
            name="qty"
            value={this.state.qty}
            onInput={this.handleChange}
          />
          <button>Add </button>
        </form>
      </div>
    );
  }
}
