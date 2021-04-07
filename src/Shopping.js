import React, { Component } from "react";
import ShoppingFormList from "./ShoppingFormList";
const { v4: uuidv4 } = require("uuid");
console.log(uuidv4());

export class Shopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Milk", qty: 2, id: uuidv4() },
        { name: "Bread", qty: 5, id: uuidv4() },
      ],
    };
  }
  handleShopping = () => {
    return (
      <ul>
        {this.state.items.map((item, i) => (
          <li key={this.state.items.id}>
            {item.name}:{item.qty}
          </li>
        ))}
      </ul>
    );
  };

  addItems = (item) => {
    this.setState((pst) => ({
      items: [...pst.items, item],
    }));
  };

  render() {
    return (
      <div>
        <h2>Shopping List</h2>
        {this.handleShopping()}
        <ShoppingFormList itemAdd={this.addItems} />
      </div>
    );
  }
}

export default Shopping;
