import React, { Component, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import "../styles/ItemPage.css";

const ItemPage = ({ addToCart }) => {
    const location = useLocation();

    return(
        <div className="itemPageDiv">
            <nav>
                <ul>
                    <li><Link to="/" class="link">LocalDeMusica</Link></li>
                    <li><Link to="/checkout" class="link">Checkout</Link></li>
                </ul>
            </nav>

            <div className="itemDiv">
                <img class="infoImg" src={location.state.img} />
                <div className="info">
                    Nombre: {location.state.name} <br/>
                    Precio: ${location.state.price}<br/>
                    <button onClick={(e) => addToCart(e, {
                        name: location.state.name,
                        price: location.state.price,
                        img: location.state.img,
                        id: location.state.id,
                    }, location.state.price)}>Agregar al carrito</button><br/>
                    <button>
                        <Link to="/shop" class="link">Volver</Link>
                    </button>
                </div>

            </div>


        </div>
    );
    
}

export default ItemPage;
