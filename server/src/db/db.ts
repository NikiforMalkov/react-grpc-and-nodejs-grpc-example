import { MongoClient } from "mongodb";

const uri = "mongodb://mongo:27017/";
export const client = new MongoClient(uri);

client.connect(function(err, client){
    const db = client.db("example");
});