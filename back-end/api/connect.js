// JavaScript Assincrono
// Await & Async
// FullFilled

import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://Projeto 0:Renantimao123@cluster0.2qagk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

const db = client.db("Spotify");
const songCollection = await db.collection("songs").find({}).toArray();

console.log(songCollection);
