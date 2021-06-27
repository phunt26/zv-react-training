import axios from 'axios';

import * as actions from '../actions';
import { updateTodo, createTodo, getTodos, getType ,deleteTodo} from "../actions";

const apiMiddleware = (store) => (next) => (action) => {


  // log the updated state, after calling next(action)

  switch (action.type) {
    ///----------------------------get post
    case getType(getTodos.getTodosRequest):
      next(action)
      axios.get(`http://localhost:9000/todos`)
        .then(res => {

          // successfully received data, dispatch a new action with our data
          store.dispatch(actions.getTodos.getTodosSuccess(res.data))
        })
        .catch(err => {
          // received an error from the API, dispatch a new action with an error
          store.dispatch({
            type: getType(getTodos.getTodosFailure),
            payload: { error: err },
          })
        })
      break
/////-------------------------------add todo
    case getType(createTodo.createPostRequest):
      // continue propagating the action through redux
      // this is our only call to next in this middleware
      next(action)

      // fetch data from an API that may take a while to respond
      axios.post(`http://localhost:9000/todos`, action.payload)
        .then(res => {

          // successfully received data, dispatch a new action with our data
          store.dispatch(actions.createTodo.createPostSuccess(res.data))
        })
        .catch(err => {
          // received an error from the API, dispatch a new action with an error
          store.dispatch({
            type: getType(createTodo.createPostFailure),
            payload: { error: err },
          })
        })
      break
  ///-------------------------------edit todo
    case getType(updateTodo.updateTodoRequest):
      // continue propagating the action through redux
      // this is our only call to next in this middleware
      next(action)

      // fetch data from an API that may take a while to respond
      axios.put(`http://localhost:9000/todos/${action.payload.id}`, action.payload)
        .then(res => {

          console.log(res.data);
          // successfully received data, dispatch a new action with our data
          store.dispatch(actions.updateTodo.updateTodoSuccess(res.data))
        })
        .catch(err => {
          // received an error from the API, dispatch a new action with an error
          store.dispatch({
            type: getType(updateTodo.updateTodoFailure),
            payload: { error: err },
          })
        })
      break
  /////-------------------------------Delete todo
  case getType(deleteTodo.deleteTodoRequest):
    // continue propagating the action through redux
    // this is our only call to next in this middleware
    next(action)
        console.log(action.payload)
    // fetch data from an API that may take a while to respond
    axios.delete(`http://localhost:9000/todos/${action.payload}`,{ params: { userId })
      .then(res => {

        console.log(res.data);
        // successfully received data, dispatch a new action with our data
        store.dispatch(actions.deleteTodo.deleteTodoSuccess(res.data))
      })
      .catch(err => {
        // received an error from the API, dispatch a new action with an error
        store.dispatch({
          type: getType(deleteTodo.deleteTodoFailure),
          payload: { error: err },
        })
      })
    break
    default:
      next(action)
  }
}

export default apiMiddleware