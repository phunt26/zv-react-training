import React,{useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus  } from "@fortawesome/free-solid-svg-icons";
import {createTodo,updateTodo}  from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';



export default function Todo(props){
   const [data, setData] = useState({
       id:'',
        name: '',
      
    
      });
      const dispatch = useDispatch();
    
      const [id,setid] = useState('');
     
      React.useEffect(() => {

        setid(props.item.id);
    
    
      }, [dispatch]);

      const enter = () =>{
   
        setData({
          name:''
        })
      }

   
       const handleUpdateTodo = React.useCallback(() => {
      
          if(data.name)
          {
              console.log(id);
            
        setData({
            id:'cccc'
          })
            console.log(data.id);
                dispatch(updateTodo.updateTodoRequest(data));

            
           
          }
      
        enter();

       }, [data, dispatch]);
    return (
        <div>
            <input value={data.name}  onChange={(e) => setData({ ...data, name: e.target.value })} >
            </input>
            <button  className="dd-wrappers"   onClick={() => handleUpdateTodo()}>
              ok
            </button>

            </div>
         
    )
}