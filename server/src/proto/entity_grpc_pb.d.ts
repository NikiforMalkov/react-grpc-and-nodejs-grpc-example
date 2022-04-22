// package: 
// file: entity.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as entity_pb from "./entity_pb";

interface IEntitySvcService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAll: IEntitySvcService_IgetAll;
    create: IEntitySvcService_Icreate;
    update: IEntitySvcService_Iupdate;
    delete: IEntitySvcService_Idelete;
}

interface IEntitySvcService_IgetAll extends grpc.MethodDefinition<entity_pb.GetAllRequest, entity_pb.EntityCollectionResponse> {
    path: "/EntitySvc/getAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<entity_pb.GetAllRequest>;
    requestDeserialize: grpc.deserialize<entity_pb.GetAllRequest>;
    responseSerialize: grpc.serialize<entity_pb.EntityCollectionResponse>;
    responseDeserialize: grpc.deserialize<entity_pb.EntityCollectionResponse>;
}
interface IEntitySvcService_Icreate extends grpc.MethodDefinition<entity_pb.CreateEntityRequest, entity_pb.Entity> {
    path: "/EntitySvc/create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<entity_pb.CreateEntityRequest>;
    requestDeserialize: grpc.deserialize<entity_pb.CreateEntityRequest>;
    responseSerialize: grpc.serialize<entity_pb.Entity>;
    responseDeserialize: grpc.deserialize<entity_pb.Entity>;
}
interface IEntitySvcService_Iupdate extends grpc.MethodDefinition<entity_pb.Entity, entity_pb.Entity> {
    path: "/EntitySvc/update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<entity_pb.Entity>;
    requestDeserialize: grpc.deserialize<entity_pb.Entity>;
    responseSerialize: grpc.serialize<entity_pb.Entity>;
    responseDeserialize: grpc.deserialize<entity_pb.Entity>;
}
interface IEntitySvcService_Idelete extends grpc.MethodDefinition<entity_pb.DeleteEntityRequest, entity_pb.Entity> {
    path: "/EntitySvc/delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<entity_pb.DeleteEntityRequest>;
    requestDeserialize: grpc.deserialize<entity_pb.DeleteEntityRequest>;
    responseSerialize: grpc.serialize<entity_pb.Entity>;
    responseDeserialize: grpc.deserialize<entity_pb.Entity>;
}

export const EntitySvcService: IEntitySvcService;

export interface IEntitySvcServer {
    getAll: grpc.handleUnaryCall<entity_pb.GetAllRequest, entity_pb.EntityCollectionResponse>;
    create: grpc.handleUnaryCall<entity_pb.CreateEntityRequest, entity_pb.Entity>;
    update: grpc.handleUnaryCall<entity_pb.Entity, entity_pb.Entity>;
    delete: grpc.handleUnaryCall<entity_pb.DeleteEntityRequest, entity_pb.Entity>;
}

export interface IEntitySvcClient {
    getAll(request: entity_pb.GetAllRequest, callback: (error: grpc.ServiceError | null, response: entity_pb.EntityCollectionResponse) => void): grpc.ClientUnaryCall;
    getAll(request: entity_pb.GetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: entity_pb.EntityCollectionResponse) => void): grpc.ClientUnaryCall;
    getAll(request: entity_pb.GetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: entity_pb.EntityCollectionResponse) => void): grpc.ClientUnaryCall;
    create(request: entity_pb.CreateEntityRequest, callback: (error: grpc.ServiceError | null, response: entity_pb.Entity) => void): grpc.ClientUnaryCall;
    create(request: entity_pb.CreateEntityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: entity_pb.Entity) => void): grpc.ClientUnaryCall;
    create(request: entity_pb.CreateEntityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: entity_pb.Entity) => void): grpc.ClientUnaryCall;
    update(request: entity_pb.Entity, callback: (error: grpc.ServiceError | null, response: entity_pb.Entity) => void): grpc.ClientUnaryCall;
    update(request: entity_pb.Entity, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: entity_pb.Entity) => void): grpc.ClientUnaryCall;
    update(request: entity_pb.Entity, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: entity_pb.Entity) => void): grpc.ClientUnaryCall;
    delete(request: entity_pb.DeleteEntityRequest, callback: (error: grpc.ServiceError | null, response: entity_pb.Entity) => void): grpc.ClientUnaryCall;
    delete(request: entity_pb.DeleteEntityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: entity_pb.Entity) => void): grpc.ClientUnaryCall;
    delete(request: entity_pb.DeleteEntityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: entity_pb.Entity) => void): grpc.ClientUnaryCall;
}

export class EntitySvcClient extends grpc.Client implements IEntitySvcClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getAll(request: entity_pb.GetAllRequest, callback: (error: grpc.ServiceError | null, response: entity_pb.EntityCollectionResponse) => void): grpc.ClientUnaryCall;
    public getAll(request: entity_pb.GetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: entity_pb.EntityCollectionResponse) => void): grpc.ClientUnaryCall;
    public getAll(request: entity_pb.GetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: entity_pb.EntityCollectionResponse) => void): grpc.ClientUnaryCall;
    public create(request: entity_pb.CreateEntityRequest, callback: (error: grpc.ServiceError | null, response: entity_pb.Entity) => void): grpc.ClientUnaryCall;
    public create(request: entity_pb.CreateEntityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: entity_pb.Entity) => void): grpc.ClientUnaryCall;
    public create(request: entity_pb.CreateEntityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: entity_pb.Entity) => void): grpc.ClientUnaryCall;
    public update(request: entity_pb.Entity, callback: (error: grpc.ServiceError | null, response: entity_pb.Entity) => void): grpc.ClientUnaryCall;
    public update(request: entity_pb.Entity, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: entity_pb.Entity) => void): grpc.ClientUnaryCall;
    public update(request: entity_pb.Entity, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: entity_pb.Entity) => void): grpc.ClientUnaryCall;
    public delete(request: entity_pb.DeleteEntityRequest, callback: (error: grpc.ServiceError | null, response: entity_pb.Entity) => void): grpc.ClientUnaryCall;
    public delete(request: entity_pb.DeleteEntityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: entity_pb.Entity) => void): grpc.ClientUnaryCall;
    public delete(request: entity_pb.DeleteEntityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: entity_pb.Entity) => void): grpc.ClientUnaryCall;
}
