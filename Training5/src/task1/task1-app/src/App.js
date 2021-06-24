import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import { useDispatch,useSelector} from 'react-redux';
import* as actions from './redux/actions';
import { todosState$ } from './redux/selectors';
import { connect } from 'react-redux'
import { fetchMovies } from './redux/reducers/todos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown ,faAngleUp,faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [keyword, setKeyword] = useState('');
  const todoList = useSelector(todosState$);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [headerTitle,setheaderTitle] = useState('');
  const [List,setList] = useState([])
  const [isListOpen,setisListOpen] = useState(false)
  const [query,setQuery] = useState('');
  const [filter,setFilter] = useState({
    menu: [
     
      {
          id: 0,
          title: 'Completed',
          selected: false,
          key: 'menu',
          completed: true
      },
      {
          id: 1,
          title: 'Not yet',
          selected: false,
          key: 'menu',
          completed: false,
      },
     
    ]
   })
function handleInputOnchange(e) {

  
  const { value } = e.target;
  console.log(value, 123);
  setKeyword(value);
  if(value)
  {
    const results = todoList.filter(person =>
      person.name.toLowerCase().includes(value)
    );
    setList(results);
   
    setIsLoading(true);
    
  }else{
   
  }
  
}
const toggleList = () => {
 
 setisListOpen(current => !current)
}

const selectItem = (item) => {
  if(item)
  {
  const { title, id, key ,completed} = item;
 
  setheaderTitle(title)
  setisListOpen(false);

  const results = todoList.filter(person =>
    person.completed === completed
  );
  setList(results);
 }else{
  setheaderTitle("All");
  setList(todoList);
  setisListOpen(false);
 }
  
 
}


React.useEffect(()=>{
  dispatch(actions.getTodos.getTodosRequest());


},[dispatch]);

React.useEffect(()=>{
  
 
  setList(todoList);

},[todoList]);


  return (
  
     <div className="formNumber"  spacing={2} >
       <section className="search">
       <input value={keyword} placeholder='Enter To Do Name'  onChange={handleInputOnchange} />
        <div className="dd-wrapper">
      <button
        type="button"
        className="dd-header"
     onClick={toggleList}
      >
        <div className="dd-header-title">{headerTitle}</div>
        {isListOpen
          ? <FontAwesomeIcon  icon={faAngleUp} size="2x" />
          : <FontAwesomeIcon  icon={faAngleDown} size="2x" />}
      </button>
     {isListOpen && (
        <div
          role="list"
          className="dd-list"
        >
           <button
              type="button"
              className="dd-list-item"
           
              onClick={() => selectItem()}
            >
              <label>All</label>
              {' '}
             
            </button>
          {filter.menu.map((item) => (
            <button
              type="button"
              className="dd-list-item"
              key={item.id}
              onClick={() => selectItem(item)}
            >
              <label>{item.title}</label>
              {' '}
              {item.selected && <FontAwesomeIcon icon={faCheckCircle} size="2x" />}
            </button>
          ))}
               </div>
                 )}
    </div>
       </section>
       <h2>To Do List</h2>
    {List.map((todo) => (
   <div key={todo._id} item xs={12} >
    { todo.name}
   </div>
 ))}
</div>
  );
}
const mapStateToProps = state => {
  console.log(state.todos);
  return {
   todos :state.todos.data
  }
}

const mapDispatchToProps = {
  fetchMovies
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)