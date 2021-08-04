import React, { Component } from "react";
import { useHistory } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Checkout = props => {
  const location = useLocation();

    return(
      <div className="checkout">
        {props.parentState.cart
            //mapeo para display
            .map((item, index, arr) =>
              <div>{item.name}</div>
        )}
        <button onClick={ useHistory().goBack }>volver</button>

      </div>
    );
}

export default Checkout;
