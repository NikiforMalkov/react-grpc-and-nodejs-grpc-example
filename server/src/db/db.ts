import { MongoClient } from "mongodb";
import 'dotenv/config';

export const client = new MongoClient(process.env.DB_URI);

client.connect(function(err, client){
    const db = client.db(process.env.DB_NAME);
});