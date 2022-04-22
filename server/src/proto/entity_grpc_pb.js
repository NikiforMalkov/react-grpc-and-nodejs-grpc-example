// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// protos/entity/entity.proto
//
'use strict';
var grpc = require('grpc');
var entity_pb = require('./entity_pb.js');

function serialize_CreateEntityRequest(arg) {
  if (!(arg instanceof entity_pb.CreateEntityRequest)) {
    throw new Error('Expected argument of type CreateEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateEntityRequest(buffer_arg) {
  return entity_pb.CreateEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DeleteEntityRequest(arg) {
  if (!(arg instanceof entity_pb.DeleteEntityRequest)) {
    throw new Error('Expected argument of type DeleteEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DeleteEntityRequest(buffer_arg) {
  return entity_pb.DeleteEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Entity(arg) {
  if (!(arg instanceof entity_pb.Entity)) {
    throw new Error('Expected argument of type Entity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Entity(buffer_arg) {
  return entity_pb.Entity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_EntityCollectionResponse(arg) {
  if (!(arg instanceof entity_pb.EntityCollectionResponse)) {
    throw new Error('Expected argument of type EntityCollectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_EntityCollectionResponse(buffer_arg) {
  return entity_pb.EntityCollectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetAllRequest(arg) {
  if (!(arg instanceof entity_pb.GetAllRequest)) {
    throw new Error('Expected argument of type GetAllRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetAllRequest(buffer_arg) {
  return entity_pb.GetAllRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var EntitySvcService = exports.EntitySvcService = {
  getAll: {
    path: '/EntitySvc/getAll',
    requestStream: false,
    responseStream: false,
    requestType: entity_pb.GetAllRequest,
    responseType: entity_pb.EntityCollectionResponse,
    requestSerialize: serialize_GetAllRequest,
    requestDeserialize: deserialize_GetAllRequest,
    responseSerialize: serialize_EntityCollectionResponse,
    responseDeserialize: deserialize_EntityCollectionResponse,
  },
  create: {
    path: '/EntitySvc/create',
    requestStream: false,
    responseStream: false,
    requestType: entity_pb.CreateEntityRequest,
    responseType: entity_pb.Entity,
    requestSerialize: serialize_CreateEntityRequest,
    requestDeserialize: deserialize_CreateEntityRequest,
    responseSerialize: serialize_Entity,
    responseDeserialize: deserialize_Entity,
  },
  update: {
    path: '/EntitySvc/update',
    requestStream: false,
    responseStream: false,
    requestType: entity_pb.Entity,
    responseType: entity_pb.Entity,
    requestSerialize: serialize_Entity,
    requestDeserialize: deserialize_Entity,
    responseSerialize: serialize_Entity,
    responseDeserialize: deserialize_Entity,
  },
  delete: {
    path: '/EntitySvc/delete',
    requestStream: false,
    responseStream: false,
    requestType: entity_pb.DeleteEntityRequest,
    responseType: entity_pb.Entity,
    requestSerialize: serialize_DeleteEntityRequest,
    requestDeserialize: deserialize_DeleteEntityRequest,
    responseSerialize: serialize_Entity,
    responseDeserialize: deserialize_Entity,
  },
};

exports.EntitySvcClient = grpc.makeGenericClientConstructor(EntitySvcService);
