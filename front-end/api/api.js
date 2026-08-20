import axios from "axios";

const URL = (
  import.meta.env.VITE_API_URL ||
  "https://spotify-backend-rnanwp.onrender.com"
).replace(/\/+$/, "");

const api = axios.create({
  baseURL: URL,
  timeout: 30000,
});

const requests = new Map();

const getCollection = async (collection) => {
  if (!requests.has(collection)) {
    const request = api
      .get(`/${collection}`)
      .then(({ data }) => (Array.isArray(data) ? data : []))
      .catch((error) => {
        requests.delete(collection);
        console.error(`Erro ao buscar ${collection}:`, error);
        return [];
      });

    requests.set(collection, request);
  }

  return requests.get(collection);
};

export const getArtists = () => getCollection("artists");

export const getSongs = () => getCollection("songs");

// import axios from "axios";

// const URL = "http://localhost:3003";

// const responseArtists = await axios.get(`${URL}/artists`);
// const responseSongs = await axios.get(`${URL}/songs`);

// export const artistArray = responseArtists.data;
// export const songsArray = responseSongs.data;

// // console.log(responseArtists);
