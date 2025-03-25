// JavaScript Assincrono
// Await & Async
// FullFilled

import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://reenan92011:jWzrQlFRG9AYarYn@cluster0.ok7t9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("Spotify");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
