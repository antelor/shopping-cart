import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../styles/Homepage.css";

export class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="Homepage">
        <nav>
          <ul>
            <li>LocalDeMusica</li>
            <li><Link to="/checkout" class="link">Checkout</Link></li>
          </ul>
        </nav>

        <div className="homepageDiv">
          <button className="btn shopBtn"><Link to="/shop" class="shopLink">Visita nuestra tienda</Link></button>
        </div>
      </div>
    );
  }
}

export default Homepage;
