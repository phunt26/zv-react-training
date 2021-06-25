import {createActions } from 'redux-actions';

export const getType =(reduxAction) =>{
    
    return reduxAction().type;
};

 export const getTodos = createActions({
     getTodosRequest: undefined,
     getTodosSuccess: (payload) => payload,
     getTodosFailure: (err) =>err, 
 });

 export const createTodo =  createActions({
    createPostRequest:  undefined,
    createPostSuccess: (payload) => payload,
    createPostFailure: (err) =>err, 
 })     
 export const updateTodo =  createActions({
    updateTodoRequest:  undefined,
    updateTodoSuccess: (payload) => payload,
    updateTodoFailure: (err) =>err, 
 })                   
  
 
 
 