import React, { Component } from "react";
import { Link } from 'react-router-dom';
import allProducts from "../data/allProducts";
import Item from "./Item";

export class Shop extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div className="Shop">
            {allProducts
            //mapeo para display
            .map((item, index, arr) =>
              <Item name={item.name} price={item.price} img={item.img}/>                
            )}  

            <button><Link to="/checkout">Checkout</Link></button>
        </div>
    );
  }
}

export default Shop;
