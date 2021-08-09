import React from "react";
import { useHistory } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import "../styles/Checkout.css";

const Checkout = ({ parentState, deleteItem }) => {
  const location = useLocation();

  let checkoutList = (parentState.cart[0]===undefined
    ? <div className="checkoutItem">Carrito vacio!</div>
    : parentState.cart.map((item, index, arr) =>
      <div className="checkoutItem">
        <img className="checkoutImg" src={ item.img } />

        <span className="checkoutName">
          {item.name}
        </span>
        <span className="checkoutPrice">
          ${item.price}
        </span>

        <button onClick={(e) => deleteItem(e, item)}>X</button>

      </div>));
  
  return (
      <div className="checkout">
        <nav>
          <ul>
            <li><Link to="/" className="link">LocalDeMusica</Link></li>
            <li><Link to="/checkout" className="link">({parentState.sizeOfCart}) Checkout</Link></li>
          </ul>
        </nav>
        
        <div className="checkoutDiv">
        {checkoutList}
        
        <div>
          <span className="checkoutItem">
            Precio total: ${parentState.totalPrice}
          </span>

        <button className="btn backBtn" onClick={ useHistory().goBack }>Volver</button>
        </div>

        </div>

      </div>
    );
}

export default Checkout;
