import React, { Component, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import "../styles/Item.css";

export function Item( { name, price, img } ) {
  const history = useHistory();

  function goItemPage () {    
    history.push({
      pathname: '/item',
      state: {
        name,
        price,
        img,
      }
    });
  }

  useEffect(() => {
    window.addEventListener("click", goItemPage);

    return () => {
      window.removeEventListener("click", goItemPage);
    };
  });

  return(
    <div className="item">
      {name} {price} {img}
    </div>
  )
}

export default Item;
