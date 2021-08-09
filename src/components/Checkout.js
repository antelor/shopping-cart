import React from "react";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../styles/Checkout.css";

const Checkout = props => {
  let checkoutList = (props.parentState.cart[0]===undefined
    ? <div className="checkoutItem">Carrito vacio!</div>
    : props.parentState.cart.map((item, index, arr) =>
      <div className="checkoutItem">
        <img className="checkoutImg" src={ item.img } />

        <span className="checkoutName">
          {item.name}
        </span>
        <span className="checkoutPrice">
          ${item.price}
        </span>

        <button>X</button>
      </div>));
  
  return (
      <div className="checkout">
        <nav>
          <ul>
            <li><Link to="/" className="link">LocalDeMusica</Link></li>
            <li><Link to="/checkout" className="link">({props.parentState.sizeOfCart}) Checkout</Link></li>
          </ul>
        </nav>
        
        <div className="checkoutDiv">
          {checkoutList}
          <button className="btn backBtn" onClick={ useHistory().goBack }>Volver</button>
        </div>

      </div>
    );
}

export default Checkout;
