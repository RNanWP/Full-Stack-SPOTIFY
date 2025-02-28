import React from "react";
import SongItem from "./SongItem";

const SongList = ({ songsArray }) => {
  return (
    <div className="song-list">
      {songsArray.map((currentSongObj, index) => (
        <SongItem {...currentSongObj} key={index} />
      ))}

      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />
    </div>
  );
};

export default SongList;
