import React, { useState, useEffect } from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { getSongs, getArtists } from "../../api/api.js";

const Song = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [artistObj, setArtistObj] = useState(null);
  const [randomIdFromArtist, setRandomIdFromArtist] = useState(null);
  const [randomId2FromArtist, setRandomId2FromArtist] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setSong(null); // Limpa a música anterior para forçar recarregamento
      const songsArray = await getSongs();
      const artistArray = await getArtists();

      const currentSong = songsArray.find(
        (currentSongObj) => currentSongObj._id === id
      );

      if (currentSong) {
        const currentArtist = artistArray.find(
          (currentArtistObj) => currentArtistObj.name === currentSong.artist
        );

        const songsArrayFromArtist = songsArray.filter(
          (songObj) =>
            songObj.artist === currentSong.artist &&
            songObj._id !== currentSong._id
        );

        if (songsArrayFromArtist.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * songsArrayFromArtist.length
          );
          setRandomIdFromArtist(songsArrayFromArtist[randomIndex]._id);

          const randomIndex2 = Math.floor(
            Math.random() * songsArrayFromArtist.length
          );
          setRandomId2FromArtist(songsArrayFromArtist[randomIndex2]._id);
        }

        setSong(currentSong);
        setArtistObj(currentArtist);
      }
    };

    fetchData();
  }, [id]);

  if (!song || !artistObj) {
    return <div className="song__container">Carregando...</div>;
  }

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={song.image} alt={`Imagem da musica ${song.name}`} />
        </div>
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do artista ${song.artist}`}
          />
        </Link>

        <Player
          // duration={song.duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
          audio={song.audio}
        />

        <div>
          <p className="song__name">{song.name}</p>
          <p>{song.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;

// import React from "react";
// import Player from "../components/Player";
// import { Link, useParams } from "react-router-dom";
// import { songsArray } from "../assets/database/songs";
// import { artistArray } from "../assets/database/artists";

// const Song = () => {
//   const { id } = useParams();

//   const { image, name, duration, artist, audio } = songsArray.filter(
//     (currentSongObj) => currentSongObj._id === id
//   )[0];

//   const artistObj = artistArray.filter(
//     (currentArtistObj) => currentArtistObj.name === artist
//   )[0];

//   const songsArrayFromArtist = songsArray.filter(
//     (currentSongObj) => currentSongObj.artist === artist
//   );

//   const randomIndex = Math.floor(
//     Math.random() * (songsArrayFromArtist.length - 1)
//   );
//   const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;

//   const randomIndex2 = Math.floor(
//     Math.random() * (songsArrayFromArtist.length - 1)
//   );
//   const randomId2FromArtist = songsArrayFromArtist[randomIndex2]._id;

//   return (
//     <div className="song">
//       <div className="song__container">
//         <div className="song__image-container">
//           <img src={image} alt={`Imagem da musica ${name}`} />
//         </div>
//       </div>
//       <div className="song__bar">
//         <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
//           <img
//             width={75}
//             height={75}
//             src={artistObj.image}
//             alt={`Imagem do artista ${artist}`}
//           />
//         </Link>

//         <Player
//           duration={duration}
//           randomIdFromArtist={randomIdFromArtist}
//           randomId2FromArtist={randomId2FromArtist}
//           audio={audio}
//         />

//         <div>
//           <p className="song__name">{name}</p>
//           <p>{artist}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Song;
