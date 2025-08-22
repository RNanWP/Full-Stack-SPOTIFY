import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import { getArtists, getSongs } from "../../api/api.js";

const Artist = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [songsArrayFromArtist, setSongsArrayFromArtist] = useState([]);
  const [randomIdFromArtist, setRandomIdFromArtist] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const artists = await getArtists();
      const songs = await getSongs();

      const currentArtist = artists.find(
        (currentArtistObj) => currentArtistObj._id === id
      );

      if (currentArtist) {
        setArtist(currentArtist);
        const artistSongs = songs.filter(
          (currentSongObj) => currentSongObj.artist === currentArtist.name
        );
        setSongsArrayFromArtist(artistSongs);

        if (artistSongs.length > 0) {
          const randomIndex = Math.floor(Math.random() * artistSongs.length);
          setRandomIdFromArtist(artistSongs[randomIndex]._id);
        }
      }
    };

    fetchData();
  }, [id]);

  if (!artist || songsArrayFromArtist.length === 0) {
    return <div className="main">Carregando...</div>;
  }

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${artist.banner})`,
        }}
      >
        <h2 className="artist__title">{artist.name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={songsArrayFromArtist} />
      </div>

      <Link to={`/song/${randomIdFromArtist}`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
// import { Link, useParams } from "react-router-dom";
// import SongList from "../components/SongList";
// import { artistArray } from "../assets/database/artists";
// import { songsArray } from "../assets/database/songs";

// const Artist = () => {
//   const { id } = useParams();

//   const { name, banner } = artistArray.filter(
//     (currentArtistObj) => currentArtistObj._id === id
//   )[0];

//   const songsArrayFromArtist = songsArray.filter(
//     (currentSongObj) => currentSongObj.artist === name
//   );

//   const randomIndex = Math.floor(
//     Math.random() * (songsArrayFromArtist.length - 1)
//   );
//   const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;

//   return (
//     <div className="artist">
//       <div
//         className="artist__header"
//         style={{
//           backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`,
//         }}
//       >
//         <h2 className="artist__title">{name}</h2>
//       </div>

//       <div className="artist__body">
//         <h2>Populares</h2>

//         <SongList songsArray={songsArrayFromArtist} />
//       </div>

//       <Link to={`/song/${randomIdFromArtist}`}>
//         <FontAwesomeIcon
//           className="single-item__icon single-item__icon--artist"
//           icon={faCirclePlay}
//         />
//       </Link>
//     </div>
//   );
// };

// export default Artist;
