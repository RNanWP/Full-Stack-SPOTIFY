import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getArtists, getSongs } from "../../api/api.js";

const Main = ({ type }) => {
  const [artistArray, setArtistArray] = useState([]);
  const [songsArray, setSongsArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const artists = await getArtists();
      const songs = await getSongs();
      setArtistArray(artists);
      setSongsArray(songs);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="main">Carregando...</div>;
  }

  return (
    <div className="main">
      {/* Artista containers */}
      {(type === "artists" || type === undefined) && (
        <ItemList
          title="Artistas"
          items={10}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      )}

      {/* Musica containers */}
      {(type === "songs" || type === undefined) && (
        <ItemList
          title="Músicas"
          items={20}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      )}
    </div>
  );
};

export default Main;

// import React from "react";
// import ItemList from "./ItemList";
// import { artistArray } from "../assets/database/artists";
// import { songsArray } from "../assets/database/songs";

// const Main = ({ type }) => {
//   return (
//     <div className="main">
//       {/* Artista containers */}
//       {type === "artists" || type === undefined ? (
//         <ItemList
//           title="Artistas"
//           items={10}
//           itemsArray={artistArray}
//           path="/artists"
//           idPath="/artist"
//         />
//       ) : (
//         <></>
//       )}

//       {/* Musica containers */}
//       {type === "songs" || type === undefined ? (
//         <ItemList
//           title="Músicas"
//           items={20}
//           itemsArray={songsArray}
//           path="/songs"
//           idPath="/song"
//         />
//       ) : (
//         <></>
//       )}
//     </div>
//   );
// };

// export default Main;
