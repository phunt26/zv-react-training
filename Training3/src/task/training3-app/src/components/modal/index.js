import React, { Component,useEffect,useRef, useState } from 'react';
import '../modal/index.css';


export default  function Modal(props) {
    const [input,setInput] = useState("");
    const inputt = useRef();
    const onClose = (e) => {
        console.log( props.onClose);
        props.onClose && props.onClose(e);
        setInput("");
        onTrigger("");
    };
    const inputText = (e) =>{
       setInput(inputt.current.value);
       onTrigger(inputt.current.value);
    }
   const  onTrigger = (event) => {
        props.parentCallback(event);
      
    }

    React.useEffect(()=>{
        
        console.log("okk");
        var x=  document.getElementById('text');
        console.log(x);
        if(x)
        {
            if(props.open==false)
            {
               
                x.addEventListener('keydown',inputText);
            }
            return () => {
                x.removeEventListener('keydown', inputText);
              };
        
        }
       
     
        }   ,[props.open]);
    

        console.log(props.open);
        if (props.open) {
            return null;
        }

        return (
            <section className="modal-container" id="modal">
                <div className="modal-content">
                    <h1>{input}</h1>
                    <button className="btn" onClick={onClose}>Close Modal</button>
               
            <input
              placeholder="Enter Number"
              type="text"
              id="text"
              name="inputText"
              required
              className="NumberInput"
              ref={inputt}
            />
         
           
            
      
                </div>
              
            </section>
        );
    }


