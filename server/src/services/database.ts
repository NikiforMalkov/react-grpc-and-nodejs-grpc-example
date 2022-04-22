import { Db, MongoClient, ObjectId } from "mongodb";

const dbClient = new MongoClient("mongodb://mongo:27017/");
let db:Db = null;

async function connectDB() {
    try {
        await dbClient.connect();
        db = await dbClient.db(process.env.DB_NAME);
        db.command({ ping: 1 });
        console.log("Connected successfully to mongo server");
        
    } catch (e) {
        console.error(e);
    }
}

connectDB();

export const database = db;