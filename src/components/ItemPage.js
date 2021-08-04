import React, { Component, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

const ItemPage = ({ addToCart }) => {
    const location = useLocation();

    /*useEffect(() => {
        console.log(location.pathname);
        console.log(location.state.name);
     }, [location]);*/

    return(
        <div className="ItemPage">
            {location.state.name}
            <button onClick={(e) => addToCart(e, {
                name: location.state.name,
                price: location.state.price,
                img: location.state.img,
                id: location.state.id,
            }, location.state.price)}>add to cart</button>

            <Link to="/shop">volver</Link>

        </div>
    );
    
}

export default ItemPage;
