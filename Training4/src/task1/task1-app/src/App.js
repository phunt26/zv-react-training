import React,{Component,useEffect,useState} from 'react';
import logo from './logo.svg';
import Axios from 'axios';
import debounce from 'lodash.debounce';
import './App.css'
function App() {
  const [punchline, setPunchline] = useState(false);
  const [setup, setSetup] = useState('');
  const [showJoke, setShowjoke] = useState({
    punchline : null,
    setup:null,

  }
    );
  
  useEffect(()=>{
    debounceRandom();
  },[])

  function fetchJokes() {
    Axios.get(`https://official-joke-api.appspot.com/random_joke`)
    .then(res => setShowjoke(res.data));
  }

  const debounceRandom = React.useCallback(debounce(() => fetchJokes(), 500), [])


  return (
    <div className="content">
         <label>{showJoke.setup}</label>
      <label>{showJoke.punchline}</label>
   
            <button className="btn" onClick={debounceRandom}>
        Get More joke
      </button>

    </div>
  );

}

export default App;
