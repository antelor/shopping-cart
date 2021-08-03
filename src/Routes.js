import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";
import ItemPage from "./components/ItemPage";

export class Routes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      totalPrice: 0,
    };

    this.addToCart = this.addToCart.bind(this);
    this.addToCart();
  }

  addToCart = (e, item, price = 0) => {
    let copyState = this.state;

    copyState.cart.push(item);
    copyState.totalPrice = copyState.totalPrice + price;

    this.setState(copyState);
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Homepage parentState={this.state} />} />
          <Route exact path="/shop" render={() => <Shop parentState={this.state} />} />
          <Route exact path="/checkout" render={() => <Checkout parentState={this.state} />} />
          <Route exact path="/item/:categoryId" render={() => <ItemPage addToCart={this.addToCart}/>} />
        </Switch>
      </BrowserRouter>
    );
  }
};

export default Routes;