import axios from 'axios';
import * as actions from '../actions';
import {  getTodos, getType } from "../actions";

const apiMiddleware = (store) => (next) => (action) => {


  // log the updated state, after calling next(action)
 
  switch(action.type) { 
      // only catch a specific action
      case getType(getTodos.getTodosRequest):
        // continue propagating the action through redux
        // this is our only call to next in this middleware
        next(action)
      
        // fetch data from an API that may take a while to respond
        axios.get(`http://localhost:9000/todos`)
    .then(res => {
   
      // successfully received data, dispatch a new action with our data
      store.dispatch(actions.getTodos.getTodosSuccess(res.data))
    })
    .catch(err => {
      // received an error from the API, dispatch a new action with an error
      store.dispatch({
        type: getType(getTodos.getTodosFailure ) ,
              payload: { error: err },
      })
    })
        break
        default: 
        next(action)
    }
  }
   
  export default apiMiddleware