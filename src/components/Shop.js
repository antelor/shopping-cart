import React, { Component } from "react";
import { Link } from 'react-router-dom';
import allProducts from "../data/allProducts";
import Item from "./Item";
import "../styles/Shop.css";

export class Shop extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="Shop">
          <nav>
            <ul>
              <li>LocalDeMusica</li>
              <li><button><Link to="/checkout">Checkout</Link></button></li>
            </ul>
          </nav>
          
                 

            {allProducts
            //mapeo para display
            .map((item, index, arr) =>
              <Item name={item.name} price={item.price} img={item.img} id={index}/>
            )}  


        </div>
    );
  }
}

export default Shop;
