import {createActions } from 'redux-actions';

export const getType =(reduxAction) =>{
    
    return reduxAction().type;
};

 export const getTodos = createActions({
     getTodosRequest: undefined,
     getTodosSuccess: (payload) => payload,
     getTodosFailure: (err) =>err, 
 });
 