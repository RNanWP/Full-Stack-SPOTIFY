import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const SingleItem = () => {
  return (
    <div className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
            alt="Imagem do Artista X"
          />
        </div>

        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
      </div>

      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__title">Henrique & Juliano</p>
        </div>

        <p className="single-item__type">Artista</p>
      </div>
    </div>
  );
};

export default SingleItem;
