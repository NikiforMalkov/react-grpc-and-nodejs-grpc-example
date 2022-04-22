import React, { useEffect, useState } from 'react';

const { EntitySvcClient } = require('../proto/entity_grpc_web_pb');
const { GetAllRequest, CreateEntityRequest, DeleteEntityRequest, Entity } = require('../proto/entity_pb');

const client = new EntitySvcClient('http://localhost:8080', null, null);

const stylesheet = `
    .brand-color {
        background: #10122E!important;
    }
`

export default function EntityPage() {

    const [entityCollection, setEntityCollection] = useState<any[]>([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [currentEntity, setCurrentEntity] = useState({
        index:-1,
        _id:"",
        title:"",
        description:""
    });

    useEffect( () => {
        all();
    }, []);

    const create = async () => {
        let createRequest = new CreateEntityRequest();
        createRequest.setTitle(title);
        createRequest.setDescription(description);
        setTitle("");
        setDescription("");
        client.create(createRequest, null, function(err:any, response:any) {
            if (response.array.length > 0) {
                let entityRemovedCollection:any[] = [...entityCollection];
                entityRemovedCollection.push(response.array);
                setEntityCollection(entityRemovedCollection);
            }
        });
    }

    const deleteEntity = async (id:string, index:number) => {
        let deleteRequest = new DeleteEntityRequest();
        deleteRequest.setId(id);
        console.log("request ", deleteRequest);
        client.delete(deleteRequest, null, function(err:any, response:any) {
            console.log('DeleteEntityRequest');
            console.log('resp', response);
            //TODO: check response
            let entityRemovedCollection = [...entityCollection];
            entityRemovedCollection.splice(index, 1);
            setEntityCollection([...entityRemovedCollection]);
        });
    }

    const update = async () => {
        let entity = new Entity();
        entity.setId(currentEntity._id);
        entity.setTitle(currentEntity.title);
        entity.setDescription(currentEntity.description);   
        console.log("request ", entity);
        client.update(entity, null, function(err:any, response:any) {
            console.log('Entity');
            console.log('resp', response);
            let entityUpdatedCollection = [...entityCollection];
            entityUpdatedCollection[currentEntity.index] = [currentEntity._id, currentEntity.title, currentEntity.description];
            setEntityCollection([...entityUpdatedCollection]);
            setCurrentEntity({
                index:-1,
                _id:"",
                title:"",
                description:""
            });
        });
    }

    const all = async (page = 1) => {
        let getAllRequest = new GetAllRequest();
        getAllRequest.setPage("1");
        getAllRequest.setLimit("20");
        if (page !== 1) {
            getAllRequest.setPage(page.toString());
        }
        client.getAll(getAllRequest, null, function(err:any, response:any) {
            setEntityCollection(response.array[0]);
        });
    }

    const entities = entityCollection.length > 0 ?
        entityCollection.map((note, index) => 
            <tr key={index}>
                <td>{ note[0] }</td>
                <td>{ note[1] }</td>
                <td>{ note[2] }</td>
                <td>
                    <button className='btn btn-danger m-1' onClick={ () => deleteEntity(note[0], index)}>delete</button>
                    <button className='btn btn-success m-1'  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={ async () => { 
                            console.log('clicked', note, index);
                            setCurrentEntity({index:index, _id: note[0], title:note[1], description:note[2] });
                        } }>update</button>
                </td>
            </tr>
        ) : <tr></tr>;

    
    return (
        <div className="row h-100">
            <style>
                {stylesheet}
            </style>
            <main className="col ms-sm-auto">
                <div className="col">
                    <div className='row'>
                        <div className="needs-validation">
                            <div className="row g-3 m-2">
                                <div className="col-sm-6">
                                <label  className="form-label">Title</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value={title} onChange={ (e) => { setTitle(e.target.value)} }/>
                                <div className="invalid-feedback">
                                    Title is required.
                                </div>
                                </div>

                                <div className="col-sm-6">
                                <label className="form-label">Description</label>
                                <input type="text" className="form-control" id="lastName" placeholder="" value={description} onChange={ (e) => { setDescription(e.target.value)} }/>
                                <div className="invalid-feedback">
                                    Description is required.
                                </div>
                                </div>
                            </div>
                            <button className='btn btn-primary' onClick={ () => create() }>Create</button>
                        </div>
                    </div>
                    <div className="row table-responsive p-3">
                        <table className="table">
                            <thead className='f-18  p-2'>
                                <tr>
                                    <th scope="col">№</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody className='p-2'>
                                {
                                    entities
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </main> 
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <button id="closeModal" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {
                                currentEntity != null ?
                                <div>
                                    <div className='row'>
                                        <div className='d-grid gap-2 col-6 mx-auto'>
                                            <label className='mb-1'>Title</label>
                                            <input className='text-center' value={ currentEntity.title }  type="text" onChange={ (e) => { 
                                                setCurrentEntity(prevState => {
                                                    const newState = Object.assign(currentEntity, { ["title"]: e.target.value })
                                                    return { ...prevState, ...newState };
                                                });
                                            } } />
                                            <label className='mb-1'>Description</label>
                                            <input className='text-center' value={ currentEntity.description }  type="text" onChange={ (e) => { 
                                                setCurrentEntity(prevState => {
                                                    const newState = Object.assign(currentEntity, { ["description"]: e.target.value })
                                                    return { ...prevState, ...newState };
                                                });
                                            } } />
                                        </div>
                                    </div>
                                </div> : null
                            }
                        </div>
                        <div className="modal-footer d-inline">
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button type="button" className="btn btn-primary mb-1" onClick={() => { 
                                    console.log('current ', currentEntity);
                                    update();
                                }}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}