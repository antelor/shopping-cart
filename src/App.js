import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Homepage from "./components/Homepage";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      totalPrice: 0,
    };
  }

  render() {
    return (
      <Homepage />
    );
  }
}

export default App;
