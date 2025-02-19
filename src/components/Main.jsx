import React from "react";

const Main = () => {
  return (
    <div className="main">
      <div className="item-list">
        <div className="item-list__header">
          <h2>Artistas populares</h2>
          <a className="item-list__link" href="/">
            Mostrar tudo
          </a>
        </div>

        <div className="single-item">
          <img
            className="single-item__image"
            src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
            alt="Imagem do Artista X"
          />

          <FontAwesomeIcon icon="fa-solid fa-circle-play" />

          <p>Henrique & Juliano</p>
          <p>Artista</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
