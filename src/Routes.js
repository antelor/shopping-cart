import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";
import ItemPage from "./components/ItemPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/item/:categoryId" component={ItemPage} />

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;