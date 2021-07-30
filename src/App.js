import React, { Component } from "react";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";

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
      <div>
        <Homepage {...this.state} />
        <Shop {...this.state}/>
        <Checkout {...this.state} />        
      </div>
    );
  }
}

export default App;
