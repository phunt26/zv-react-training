
import { INIT_STATE } from "../../constant";
import { updateTodo, getTodos,deleteTodo, createTodo,getType } from "../actions";

export default function todosReducers(state = INIT_STATE.todos,action){
 switch(action.type){
     case getType(getTodos.getTodosRequest) :
      
     return{
         ...state,
         isLoading:true,
     };
     case getType(getTodos.getTodosSuccess) :
        console.log("ok");
        return{
            ...state,
            isLoading:false,
            data: action.payload
        };
        case getType(getTodos.getTodosFailure ) :
            return{
                ...state,
                isLoading:false,
               
            };
            case getType(createTodo.createPostSuccess):
                return {
                    ...state,
                    data : [...state.data,action.payload],
                };
                case getType(updateTodo.updateTodoSuccess):
                 let x= 1;
                 let dataa = [...state.data]
                for(var i=0;i<state.data.length;i++)
                {
                    if(state.data[i].id == action.payload.id)
                    {
                        x = i;
                        dataa[i].name = action.payload.name;
                        
                    }
                }
                
                    return {
                        ...state,
                        data : [
                            ...dataa,
                            ],
                    };
                    case getType(deleteTodo.deleteTodoSuccess ) :
                       
                       
                  
                       
     
     default:
     return state;
 }
}

export const fetchMovies = () => ({
    type: getType(getTodos.getTodosSuccess)
  })