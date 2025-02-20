import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
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
