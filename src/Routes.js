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
      sizeOfCart: -1,
      totalPrice: 0,
    };

    this.addToCart = this.addToCart.bind(this);
    this.addToCart();
  }

  addToCart = (e, item, price = 0) => {
    let copyState = this.state;

    //remove undefined
    copyState.cart = copyState.cart.filter(function (i) {
      return i != null;
    });

    copyState.cart.push(item);
    copyState.totalPrice = copyState.totalPrice + price;

    copyState.sizeOfCart++;

    this.setState(copyState);
  };

  deleteItem = (e, item) => {
    let copyState = this.state;
    let index = -1;
    for (let i = 0; i < copyState.cart.length; i++){
      if (copyState.cart[i] === item) index = i;
    }

    if (index != -1) {
      copyState.cart.splice(index, 1);
      copyState.sizeOfCart--;
      copyState.totalPrice = copyState.totalPrice - item.price;
      this.setState(copyState);    
    }

  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Homepage parentState={this.state} />} />
          <Route exact path="/shop" render={() => <Shop parentState={this.state} />} />
          <Route exact path="/checkout" render={() => <Checkout parentState={this.state} deleteItem={this.deleteItem} />} />
          <Route exact path="/item/:categoryId" render={() => <ItemPage parentState={this.state} addToCart={this.addToCart}/>} />
        </Switch>
      </BrowserRouter>
    );
  }
};

export default Routes;