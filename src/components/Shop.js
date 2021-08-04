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
      <div className="mainShop">

            <nav>
              <ul>
                <li>LocalDeMusica</li>
                <li><Link to="/checkout" class="link">Checkout</Link></li>
              </ul>
            </nav>

        <div class="shopDiv">
            {Object.entries(allProducts)
              //mapeo para display
              .map((categ, i) =>
              //category name
              <div class="categDiv"><div class="categTitle">{categ[0]}</div>
                <div class="categItems">
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
