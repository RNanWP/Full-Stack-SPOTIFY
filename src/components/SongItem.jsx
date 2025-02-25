import React from "react";
import { Link } from "react-router-dom";

const SongItem = () => {
  return (
    <Link to="/song1" className="song-item">
      <div className="song-item__numver-album">
        <p>1</p>

        <div className="song-item__album">
          <img
            src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
            alt="Imagemda Música  X"
            className="song-item__image"
          />

          <p className="song-item__name">Última Saudade - Ao Vivo</p>
        </div>
      </div>

      <p>02:30</p>
    </Link>
  );
};

export default SongItem;
