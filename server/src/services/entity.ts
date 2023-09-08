import { client } from '../db/db';
import { EntityCollectionResponse, Entity} from '../proto/entity_pb';
import { AnyError, ObjectId } from "mongodb";
import * as grpc from 'grpc';

export class EntityService {

    table:string = "entities";
    grpc:any = null;

    constructor( grpc:any) {
        //console.log('database ', db);
        this.grpc = grpc;
    }

    getAll(call:any, callback:any) {
        const entities = client.db().collection("entities");
        entities.find({}).toArray(function(err:any, docs:any) {
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
        const entities = client.db().collection("entities");
        let entity = { title: call.request.getTitle(), description: call.request.getDescription() }
        entities.insertOne(entity).then((r:any) => {
            let resp = new Entity();
            resp.setId(r.insertedId.toString());
            resp.setTitle(entity.title);
            resp.setDescription(entity.description);
            callback(null, resp);
        });
    }

    delete(call:any, callback:any) {
        const entities = client.db().collection("entities");
        let query = { _id: new ObjectId(call.request.getId()) };
        console.log("DELETE ID: ", call.request.getId());
        entities.deleteOne(query, (err:AnyError, obj:any) => {
          if (err) {
            console.log("Error is :", err)
            return callback(
                {
                  message: err ,
                  code: grpc.status.INTERNAL
                },
                null,
              ) ;
          } 
          console.log("1 document deleted");
          callback(null, null);
        });
    }

    update(call:any, callback:any) {
        const entities = client.db().collection("entities");
        let query = { _id: new ObjectId(call.request.getId()) };
        let update = {$set: {"title": call.request.getTitle(), "description":call.request.getDescription()}} 
        console.log("UPDATE ID: ", call.request.getId());
        entities.updateOne(query, update, (err:AnyError, obj:any) => {
          if (err) {
            console.log("Error is :", err)
            return callback(
                {
                  message: err ,
                  code: grpc.status.INTERNAL
                },
                null,
              ) ;
          } 
          console.log("1 document updated");
          let resp = new Entity();
          resp.setId(call.request.getId());
          resp.setTitle(call.request.getTitle());
          resp.setDescription(call.request.getDescription());
          callback(null, resp);
        });
    }

}