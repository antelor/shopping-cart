import React, { Component } from "react";
import { Link } from 'react-router-dom';
import allProducts from "../data/allProducts";
import Item from "./Item";
import "../styles/Shop.css";

export class Shop extends Component {
  render() {
    return(
      <div className="mainShop">

        <nav>
          <ul>
            <li><Link to="/" className="link">LocalDeMusica</Link></li>
            <li><Link to="/checkout" className="link">({this.props.parentState.sizeOfCart}) Checkout</Link></li>
          </ul>
        </nav>

        <div className="shopDiv">
            {Object.entries(allProducts)
              //mapeo para display
              .map((categ, i) =>
              //category name
              <div className="categDiv"><div className="categTitle">{categ[0]}</div>
                <div className="categItems">
                {categ[1].map((item, index, arr) =>
                  <Item key={index} name={item.name} price={item.price} img={item.img} id={item.id} />
                      )}
                </div>
              </div>
          )}
          </div>


        </div>
    );
  }
}

export default Shop;
