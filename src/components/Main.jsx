import React from "react";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      {/* Artista containers */}
      <ItemList />

      {/* Musica containers */}
      <ItemList />
    </div>
  );
};

export default Main;
