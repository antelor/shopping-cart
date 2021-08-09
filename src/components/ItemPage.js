import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import "../styles/ItemPage.css";

const ItemPage = ({ parentState, addToCart }) => {
    const location = useLocation();

    return(
        <div className="itemPageDiv">
            <nav>
                <ul>
                    <li><Link to="/" className="link">LocalDeMusica</Link></li>
                    <li><Link to="/checkout" className="link">({parentState.sizeOfCart}) Checkout</Link></li>
                </ul>
            </nav>

            <div className="itemDiv">
                <img className="infoImg" src={location.state.img} />
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
                        <Link to="/shop" className="btn backBtn" className="link">Volver</Link>
                    </button>
                </div>

            </div>


        </div>
    );
    
}

export default ItemPage;
