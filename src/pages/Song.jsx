import React from "react";
import Player from "../components/Player";

const Song = () => {
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            src="https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d"
            alt="Imagem da musica X"
          />
        </div>
      </div>
      <div className="song__bar">
        <div className="song__artist-image">
          <img
            width={75}
            height={75}
            src="https://i.scdn.co/image/ab6761610000517499c26e8fb91634b00764bbb9"
            alt="Imagem do artista Y"
          />
        </div>

        <Player />

        <div>
          <p className="song__name">Última Saudade - Ao Vivo</p>
          <p>Henrique & Juliano</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
