import React,{Component,useEffect,useState} from 'react';
import './App.css';
import logo from './logo.svg';
import Axios from 'axios';
import debounce from 'lodash.debounce';
function App() {
  const [visible, setVisible] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  function openDropdown() {
    setVisible(true);
  }

  React.useEffect(()=>{
    console.log(dropdownOptions);
 
  },[dropdownOptions])

  function fetchDropdownOptions(key) {
    Axios.get(`https://restcountries.eu/rest/v2/name/${key}`)
    .then(res => 
      {
    
        if (res.error) {
          console.log(res.error);
        
        } else {
          setDropdownOptions(res.data);
          
        }
      }    
     )
     .catch(error =>{
      console.log(error);
     }
     
     )
     .finally(()=>{
setIsLoading(false);
     })
  }

  const debounceDropDown = React.useCallback(debounce((nextValue) => fetchDropdownOptions(nextValue), 1000), [])

  function handleInputOnchange(e) {

    const { value } = e.target;
    console.log(value, 123);
    setKeyword(value);
    if(value)
    {
      setIsLoading(true);
      debounceDropDown(value);
    }else{
      setDropdownOptions([]);
    }
    
  }


  return (
    <section className="formNumber">
      <input value={keyword} placeholder='Enter Country Name' onClick={openDropdown} onChange={handleInputOnchange} />
      <lable style={{display: isLoading ? 'block' : 'none' }}>
      Loading.....
      </lable>
     <div>
     {
         visible ?
     dropdownOptions.map((post) => (
        <div key={post.name} item xs={12} >
          <div>{post.name}</div>
        </div>
      )): null
    }


     </div>
    </section>
  );
}

export default App;
