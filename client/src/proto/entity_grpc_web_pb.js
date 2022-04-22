/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./entity_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.EntitySvcClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.EntitySvcPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetAllRequest,
 *   !proto.EntityCollectionResponse>}
 */
const methodDescriptor_EntitySvc_getAll = new grpc.web.MethodDescriptor(
  '/EntitySvc/getAll',
  grpc.web.MethodType.UNARY,
  proto.GetAllRequest,
  proto.EntityCollectionResponse,
  /**
   * @param {!proto.GetAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.EntityCollectionResponse.deserializeBinary
);


/**
 * @param {!proto.GetAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.EntityCollectionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.EntityCollectionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.EntitySvcClient.prototype.getAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/EntitySvc/getAll',
      request,
      metadata || {},
      methodDescriptor_EntitySvc_getAll,
      callback);
};


/**
 * @param {!proto.GetAllRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.EntityCollectionResponse>}
 *     Promise that resolves to the response
 */
proto.EntitySvcPromiseClient.prototype.getAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/EntitySvc/getAll',
      request,
      metadata || {},
      methodDescriptor_EntitySvc_getAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CreateEntityRequest,
 *   !proto.Entity>}
 */
const methodDescriptor_EntitySvc_create = new grpc.web.MethodDescriptor(
  '/EntitySvc/create',
  grpc.web.MethodType.UNARY,
  proto.CreateEntityRequest,
  proto.Entity,
  /**
   * @param {!proto.CreateEntityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Entity.deserializeBinary
);


/**
 * @param {!proto.CreateEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Entity)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Entity>|undefined}
 *     The XHR Node Readable Stream
 */
proto.EntitySvcClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/EntitySvc/create',
      request,
      metadata || {},
      methodDescriptor_EntitySvc_create,
      callback);
};


/**
 * @param {!proto.CreateEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Entity>}
 *     Promise that resolves to the response
 */
proto.EntitySvcPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/EntitySvc/create',
      request,
      metadata || {},
      methodDescriptor_EntitySvc_create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Entity,
 *   !proto.Entity>}
 */
const methodDescriptor_EntitySvc_update = new grpc.web.MethodDescriptor(
  '/EntitySvc/update',
  grpc.web.MethodType.UNARY,
  proto.Entity,
  proto.Entity,
  /**
   * @param {!proto.Entity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Entity.deserializeBinary
);


/**
 * @param {!proto.Entity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Entity)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Entity>|undefined}
 *     The XHR Node Readable Stream
 */
proto.EntitySvcClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/EntitySvc/update',
      request,
      metadata || {},
      methodDescriptor_EntitySvc_update,
      callback);
};


/**
 * @param {!proto.Entity} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Entity>}
 *     Promise that resolves to the response
 */
proto.EntitySvcPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/EntitySvc/update',
      request,
      metadata || {},
      methodDescriptor_EntitySvc_update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DeleteEntityRequest,
 *   !proto.Entity>}
 */
const methodDescriptor_EntitySvc_delete = new grpc.web.MethodDescriptor(
  '/EntitySvc/delete',
  grpc.web.MethodType.UNARY,
  proto.DeleteEntityRequest,
  proto.Entity,
  /**
   * @param {!proto.DeleteEntityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Entity.deserializeBinary
);


/**
 * @param {!proto.DeleteEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Entity)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Entity>|undefined}
 *     The XHR Node Readable Stream
 */
proto.EntitySvcClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/EntitySvc/delete',
      request,
      metadata || {},
      methodDescriptor_EntitySvc_delete,
      callback);
};


/**
 * @param {!proto.DeleteEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Entity>}
 *     Promise that resolves to the response
 */
proto.EntitySvcPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/EntitySvc/delete',
      request,
      metadata || {},
      methodDescriptor_EntitySvc_delete);
};


module.exports = proto;

