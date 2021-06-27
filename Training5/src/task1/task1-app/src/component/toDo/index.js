import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { createTodo, updateTodo } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';



export default function Todo(props) {
    const [data, setData] = useState({
        id: props.item.item.id,
        name: props.item.item.name,

    });
  
    const dispatch = useDispatch();
    const [isEditOpen, setisEditOpen] = useState(props.isShow);

 
 
        //------------------------------------------  
   


    const handleUpdateTodo = React.useCallback(() => {

        if (data.name) {


            dispatch(updateTodo.updateTodoRequest(data));

        }


    }, [data, dispatch]);

    //-----------------------------
    if (props.isShow) {
     
        return null;
    }

    return (

        <div>
            <input value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} >
            </input>
            <button className="dd-wrappers" onClick={() => handleUpdateTodo()}>
                ok
            </button>

        </div>

    )
}