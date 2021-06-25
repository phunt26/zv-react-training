import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './redux/actions';
import { todosState$ } from './redux/selectors';
import { connect } from 'react-redux'
import { fetchMovies } from './redux/reducers/todos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import CreateTodo from './component/createTodo';
import Todo from './component/toDo';

function App() {
  const [keyword, setKeyword] = useState('');
  const todoList = useSelector(todosState$);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [headerTitle, setheaderTitle] = useState('');
  const [List, setList] = useState([])
  const [isListOpen, setisListOpen] = useState(false)
  const [query, setQuery] = useState('');
  const [isComplete, setisComplete] = useState(false);
  const [isEditOpen,setisEditOpen]  = useState(false);
  const [filter, setFilter] = useState({
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
  });
  const [data, setData] = React.useState({
    id:'',
    name: '',
   
  });

  React.useEffect(() => {
    console.log("load");
    dispatch(actions.getTodos.getTodosRequest());


  }, [dispatch]);

  React.useEffect(() => {


    setList(todoList);

  }, [todoList]);

  function handleInputOnchange(e) {


    const { value } = e.target;
    console.log(value, 123);
    setKeyword(value);
    if (value) {
      const results = todoList.filter(person =>
        person.name.toLowerCase().includes(value)
      );
      setList(results);
      if (isLoading === true) {

        const results2 = results.filter(person =>
          person.completed === isComplete
        );
        setList(results2);
      }


    } else {

    }

  }
  const toggleList = () => {

    setisListOpen(current => !current)
  }
  const onOpen = React.useCallback(()  => {
    setisEditOpen(current => !current);
  });
  

  const selectItem = (item) => {
    if (item) {
      const { title, id, key, completed } = item;
      setisComplete(completed);
      setheaderTitle(title)
      setisListOpen(false);
      setIsLoading(true);
      if (keyword) {

        const results = todoList.filter(person =>
          person.completed === completed
        );
        setList(results);
        const results2 = results.filter(person =>
          person.name.toLowerCase().includes(keyword)
        );
        setList(results2);

      } else {

        const results = todoList.filter(person =>
          person.completed === completed
        );
        setList(results);
      }

    } else {
      setheaderTitle("All");

      setisListOpen(false);
      setIsLoading(false);
      if (keyword) {

        const results2 = todoList.filter(person =>
          person.name.toLowerCase().includes(keyword)
        );
        setList(results2);

      } else {
        setList(todoList);
      }
    }


  }




  return (

    <div className="formNumber" spacing={2} >
      <section className="search">
        <input value={keyword} placeholder='Enter To Do Name Search' onChange={handleInputOnchange} />
        <div className="dd-wrapper">
          <button
            type="button"
            className="dd-header"
            onClick={toggleList}
          >
            <div className="dd-header-title">{headerTitle}</div>
            {isListOpen
              ? <FontAwesomeIcon icon={faAngleUp} size="2x" />
              : <FontAwesomeIcon icon={faAngleDown} size="2x" />}
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
      <CreateTodo />
      <h2>To Do List</h2>
      {List.map((todo,i) => (
        <section>
          <div key={i}  >
            <div className="searchs">
              {todo.name}
            </div>
            <button className="dd-wrappers">
              delete
            </button>
            <button onClick={() => onOpen()} key={i} className="dd-wrappers">
              edit
            </button>
            <input
            type="checkbox"
            checked={todo.completed}

          />
          </div>  
          <div style={{display: isEditOpen ? 'block' : 'none' }}>
          <Todo item={todo} />
          </div>
    
         
          
          
        </section>



      ))}
    </div>
  );
}
const mapStateToProps = state => {
  console.log(state.todos);
  return {
    todos: state.todos.data
  }
}

const mapDispatchToProps = {
  fetchMovies
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)