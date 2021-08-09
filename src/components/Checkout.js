import React, { Component } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import "../styles/Checkout.css";

const Checkout = props => {
  const location = useLocation();

  let checkoutList = (props.parentState.cart[0]==undefined
    ? <div>Carrito vacio!</div>
    : props.parentState.cart.map((item, index, arr) =>
      <div className="checkoutItem">
        <img className="checkoutImg" src={ item.img } />

        <span className="checkoutName">
          {item.name}
        </span>
        <span className="checkoutPrice">
          ${item.price}
        </span>
      </div>));
  
  return (
      <div className="checkout">
        <nav>
          <ul>
            <li><Link to="/" class="link">LocalDeMusica</Link></li>
            <li><Link to="/checkout" class="link">({props.parentState.sizeOfCart}) Checkout</Link></li>
          </ul>
        </nav>
        
        <div class="checkoutDiv">
          {checkoutList}
          <button className="btn backBtn" onClick={ useHistory().goBack }>Volver</button>
        </div>

      </div>
    );
}

export default Checkout;
