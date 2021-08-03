import React, { Component, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import "../styles/Item.css";

export function Item( { name, price, img, id } ) {
  const history = useHistory();

  function goItemPage() {
    document.getElementById(id);

    history.push({
      pathname: `/item/${id}`,
      state: {
        name: name,
        price: price,
        img: img,
        id: id,
      }
    });
  }

  useEffect(() => {
    document.getElementById(id).addEventListener("click", goItemPage);

    return () => {
      window.removeEventListener("click", goItemPage);
    };
  }); 

  return(
    <div className="item" id={id}>
      {name} {price} {img} id:{id}
    </div>
  )
}

export default Item;
