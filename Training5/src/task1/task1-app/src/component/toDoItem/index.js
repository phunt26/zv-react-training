
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
import { todosState$ } from '../../redux/selectors';
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Todo from '../toDo';



export default function ToDoItem(props) {
    const [data, setData] = useState({
        id: props.item.id,
        name: props.item.name,

    });
    const [dataCheck, setDataCheck] = useState({
        id: props.item.id,
        completed : props.item.completed,
       
        
    });
  
    const dispatch = useDispatch();
    const [isEditOpen,setisEditOpen]  = useState(true);

 
  
        //------------------------------------------  
       
        const onDelete = React.useCallback(()  => {
           
            dispatch(actions.deleteTodo.deleteTodoRequest(data));
           
          },[dispatch]);

          

          const onOpen = React.useCallback((e)  => {
    
            setisEditOpen(current => !current);
          });

       
          const setChecked = ()  => {
            console.log("11"+dataCheck.completed);
         
        
           
        
           updates(dataCheck.completed);
           console.log("33"+dataCheck.completed);
            //dispatch(actions.updateTodo.updateTodoRequest(dataCheck));
         
           
          };
          const updates = (comments) => {
            console.log("22"+comments);
      
              setDataCheck({...dataCheck, completed: !comments})
          }
    //-----------------------------


    return (

        <section>
        <div    key={props.item.id}  >
          <div className="searchs">
            {props.item.name}
          </div>
          <button onClick={() => onDelete()} className="dd-wrappers">
            delete
          </button>
          <button onClick={() => onOpen()}  className="dd-wrappers">
            edit
          </button>
          <input
          type="checkbox"
          checked={dataCheck.completed}
            onChange={() => setChecked()}
            key={props.item.id}
        />
        </div>  
        <div  >
        <Todo  item={props} isShow={isEditOpen} />
        </div>
  
        
        
        
      </section>


    )
}