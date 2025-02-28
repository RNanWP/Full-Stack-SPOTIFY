import React from "react";
import SongItem from "./SongItem";

const SongList = ({ songsArray }) => {
  const items = 5;
  
  const safeSongsArray = Array.isArray(songsArray) ? songsArray : [];
  
  return (
    <div className="song-list">
      {safeSongsArray
        .filter((currentValue, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} />
        ))}

      <p className="song-list__see-more">Ver mais</p>
    </div>
  );
};

export default SongList;
