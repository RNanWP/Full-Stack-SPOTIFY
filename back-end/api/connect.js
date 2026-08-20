// JavaScript Assincrono
// Await & Async
// FullFilled

import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI;

if (!URI) {
  throw new Error("A variável de ambiente MONGODB_URI não foi configurada.");
}

const client = new MongoClient(URI);

export const db = client.db("Spotify");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
