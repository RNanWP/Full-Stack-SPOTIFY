import React from "react";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      {/* Artista containers */}
      <ItemList title="Artistas" items={5} />

      {/* Musica containers */}
      <ItemList title="Músicas" items={10} />
    </div>
  );
};

export default Main;
