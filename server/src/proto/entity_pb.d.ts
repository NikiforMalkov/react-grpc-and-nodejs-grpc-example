// package: 
// file: entity.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Entity extends jspb.Message { 
    getId(): string;
    setId(value: string): Entity;
    getTitle(): string;
    setTitle(value: string): Entity;
    getDescription(): string;
    setDescription(value: string): Entity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entity.AsObject;
    static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entity;
    static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
}

export namespace Entity {
    export type AsObject = {
        id: string,
        title: string,
        description: string,
    }
}

export class CreateEntityRequest extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): CreateEntityRequest;
    getDescription(): string;
    setDescription(value: string): CreateEntityRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateEntityRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateEntityRequest): CreateEntityRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateEntityRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateEntityRequest;
    static deserializeBinaryFromReader(message: CreateEntityRequest, reader: jspb.BinaryReader): CreateEntityRequest;
}

export namespace CreateEntityRequest {
    export type AsObject = {
        title: string,
        description: string,
    }
}

export class GetAllRequest extends jspb.Message { 
    getPage(): string;
    setPage(value: string): GetAllRequest;
    getLimit(): string;
    setLimit(value: string): GetAllRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllRequest): GetAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllRequest;
    static deserializeBinaryFromReader(message: GetAllRequest, reader: jspb.BinaryReader): GetAllRequest;
}

export namespace GetAllRequest {
    export type AsObject = {
        page: string,
        limit: string,
    }
}

export class DeleteEntityRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteEntityRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteEntityRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteEntityRequest): DeleteEntityRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteEntityRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteEntityRequest;
    static deserializeBinaryFromReader(message: DeleteEntityRequest, reader: jspb.BinaryReader): DeleteEntityRequest;
}

export namespace DeleteEntityRequest {
    export type AsObject = {
        id: string,
    }
}

export class EntityCollectionResponse extends jspb.Message { 
    clearEntitycollectionList(): void;
    getEntitycollectionList(): Array<Entity>;
    setEntitycollectionList(value: Array<Entity>): EntityCollectionResponse;
    addEntitycollection(value?: Entity, index?: number): Entity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EntityCollectionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EntityCollectionResponse): EntityCollectionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EntityCollectionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EntityCollectionResponse;
    static deserializeBinaryFromReader(message: EntityCollectionResponse, reader: jspb.BinaryReader): EntityCollectionResponse;
}

export namespace EntityCollectionResponse {
    export type AsObject = {
        entitycollectionList: Array<Entity.AsObject>,
    }
}
