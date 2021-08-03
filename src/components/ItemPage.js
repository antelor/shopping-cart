import React, { Component, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ItemPage = props => {
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
        console.log(location.state.name);
     }, [location]);

    return(
        <div className="ItemPage">
            {location.state.name}a
        </div>
    );
    
}

export default ItemPage;
