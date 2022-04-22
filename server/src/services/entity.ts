import { EntityCollectionResponse, Entity} from '../proto/entity_pb';
import { Db, MongoClient, ObjectId } from "mongodb";

const dbClient = new MongoClient("mongodb://mongo:27017/");
let database:Db = null;

async function connectDB() {
    try {
        await dbClient.connect();
        database = await dbClient.db("example");
        database.command({ ping: 1 });
        console.log("Connected successfully to mongo server");
        
    } catch (e) {
        console.error(e);
    }
}

connectDB();

export class EntityService {

    table:string = "entities";
    grpc:any = null;

    constructor( grpc:any) {
        //console.log('database ', db);
        this.grpc = grpc;
    }

    getAll(call:any, callback:any) {
        const entities = database.collection("entities");
        entities.find({}).toArray(function(err, docs) {
            console.log('docs ', docs);
            let resp:EntityCollectionResponse = new EntityCollectionResponse();
            let entityList:Entity[] = [];

            for  (let i = 0; i < docs.length; i++) {
                let entity = new Entity();
                entity.setId(docs[i]._id.toString());
                entity.setTitle(docs[i].title);
                entity.setDescription(docs[i].description);
                entityList.push(entity);
            }
            resp.setEntitycollectionList(entityList);
            callback(null, resp);
        });
    }

    create (call:any, callback:any) {
        const entities = database.collection("entities");
        let entity = { title: call.request.getTitle(), description: call.request.getDescription() }
        entities.insertOne(entity).then(r => {
            let resp = new Entity();
            resp.setId(r.insertedId.toString());
            resp.setTitle(entity.title);
            resp.setDescription(entity.description);
            callback(null, resp);
        });
    }

    delete(call:any, callback:any) {
        const entities = database.collection("entities");
        let query = { _id: new ObjectId(call.request.getId()) };
        console.log("DELETE ID: ", call.request.getId());
        entities.deleteOne(query, (err, obj) => {
          if (err) console.log("Error is :", err)  ;
          console.log("1 document deleted");
        });
    }

    update(call:any, callback:any) {
        const entities = database.collection("entities");
        let query = { _id: new ObjectId(call.request.getId()) };
        let update = {$set: {"title": call.request.getTitle(), "description":call.request.getDescription()}} 
        console.log("DELETE ID: ", call.request.getId());
        entities.updateOne(query, update, (err, obj) => {
          if (err) console.log("Error is :", err)  ;
          console.log("1 document updated");
          let resp = new Entity();
          resp.setId(call.request.getId());
          resp.setTitle(call.request.getTitle());
          resp.setDescription(call.request.getDescription());
          callback(null, resp);
        });
    }

}