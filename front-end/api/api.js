import axios from "axios";

const URL = "https://spotify-backend-rnanwp.onrender.com/";

export const getArtists = async () => {
  try {
    const response = await axios.get(`${URL}/artists`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar artistas:", error);
    return [];
  }
};

export const getSongs = async () => {
  try {
    const response = await axios.get(`${URL}/songs`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar músicas:", error);
    return []; 
  }
};

// import axios from "axios";

// const URL = "http://localhost:3003";

// const responseArtists = await axios.get(`${URL}/artists`);
// const responseSongs = await axios.get(`${URL}/songs`);

// export const artistArray = responseArtists.data;
// export const songsArray = responseSongs.data;

// // console.log(responseArtists);
