import React from "react";
import SingleItem from "./SingleItem";

const ItemList = () => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>Artistas populares</h2>
        <a className="item-list__link" href="/">
          Mostrar tudo
        </a>
      </div>

      <div className="item-list__container">
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />

        
      </div>
    </div>
  );
};

export default ItemList;
