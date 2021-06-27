import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus  } from "@fortawesome/free-solid-svg-icons";
import {createTodo,getTodos}  from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';



export default function CreateTodo(){
   const [data, setData] = React.useState({
        name: '',
        completed: false,
    
      });
   
      const enter = () =>{
   
        setData({
          name:''
        })
      }

      const dispatch = useDispatch();
      
     
   
       const handleAddTodo = React.useCallback(() => {
        console.log(data);
     
        dispatch(createTodo.createPostRequest(data));

        enter();
  
       }, [data, dispatch]);
    return (
        <div className="formNumber"  spacing={2} >
        <section className="search">

        <input value={data.name}  placeholder='Enter To Do Name'  onChange={(e) => setData({ ...data, name: e.target.value })} />
         <div className="dd-wrapper">
       <button
         type="button"
         className="dd-header"
            onClick={handleAddTodo}
       >
         
         {
            <FontAwesomeIcon  icon={faPlus} size="1.5em" />
            }
       </button>
       
       </div>
    
       </section>
       </div>
    )
}