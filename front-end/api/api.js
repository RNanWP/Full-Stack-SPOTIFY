import axios from "axios";

const URL = "http://localhost:3003";

const responseArtists = await axios.get(`${URL}/artists`);

console.log(responseArtists);
