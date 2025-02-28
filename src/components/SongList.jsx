import React from "react";
import SongItem from "./SongItem";

const SongList = ({ songsArray }) => {
  const items = 5;
  
  if (!Array.isArray(songsArray)) {
    return <div className="song-list">No songs available</div>;
  }

  // {songsArray
  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} />
        ))}

      <p className="song-list__see-more">Ver mais</p>
    </div>
  );
};

export default SongList;
