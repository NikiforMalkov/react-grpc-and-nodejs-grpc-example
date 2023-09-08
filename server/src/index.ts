import { EntitySvcService } from './proto/entity_grpc_pb';
import { EntityService } from './services/entity';
import grpc from 'grpc';
import 'dotenv/config';

async function main() {
    const api:EntityService = new EntityService(grpc);
    let server = new grpc.Server();
    server.addService(EntitySvcService, {
        getAll: api.getAll,
        create: api.create,
        delete: api.delete,
        update: api.update,
    });
    server.bindAsync(process.env.ADDRESS, grpc.ServerCredentials.createInsecure(), () => {
        server.start();
        console.log("Server running at " + process.env.ADDRESS);
    });
}

main();