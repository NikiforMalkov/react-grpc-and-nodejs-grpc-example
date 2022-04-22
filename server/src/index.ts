import { EntitySvcService } from './proto/entity_grpc_pb';
import { EntityService } from './services/entity';
import grpc from 'grpc';


async function main() {
    const api:EntityService = new EntityService(grpc);
    let server = new grpc.Server();
    server.addService(EntitySvcService, {
        getAll: api.getAll,
        create: api.create,
        delete: api.delete,
        update: api.update,
    });
    //TODO: move to env
    let address = "0.0.0.0:9090";
    server.bindAsync(address, grpc.ServerCredentials.createInsecure(), () => {
        server.start();
        console.log("Server running at " + address);
    });
}

main();