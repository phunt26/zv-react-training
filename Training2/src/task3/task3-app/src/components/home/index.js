import React,{Component,useEffect,useRef,useState} from 'react';
import '../home/index.css';

export default function Home  () {
    const inputt = useRef();
    const [errorMessage, setErrorMessage] = useState('');
    const [number, setNumber] = useState(0);
    const timer = () => setNumber(number - 1);
    const [isBtn, setIsBtn] = useState(false);
    const update = () => {
  
        console.log("yess");
        setIsBtn(current => !current);
      
      };
     
      useEffect(
        () => {
            if(isBtn==true)
            {
                console.log("nooo");
                if (number <= 0) {
                    return;
                }else{
    
                    
                        const id = setInterval(timer, 1000);
                        return () => clearInterval(id);
                    
                }   
                    
            }
           
           
           
        },
        [number]
    );
    var isNumber = (value) => {
        return !isNaN(value);
      };

    const handleClick = (e) => {
       if(isBtn == false)
       {
        e.preventDefault();
        console.log(inputt.current.value);
        console.log(isNumber(inputt.current.value));
        if(inputt.current.value == "")
        {
         setNumber(0);
         setErrorMessage("Please input a number");
        }
         if(isNumber(inputt.current.value))
         {
             if(inputt.current.value <= 0)
             {
                 setNumber(0);
                 setErrorMessage("Number must be greater than 0");
             }else{
                 update();
                 setNumber(inputt.current.value);
                 setErrorMessage("");
                 console.log("ok")
             }
          
         }else{
             setNumber(0);
             setErrorMessage("Invalid input. Must be a number");
         }
       }else{
     
            update();
           console.log(number);
        
           inputt.current.value = number;
         
       }
        
    
          
      };

        return (
            <main>
               <div className="formNumber">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Enter Number"
              type="text"
              
              required
              className="NumberInput"
              ref={inputt}
            />
         
            <button class="btn"  type="submit" >
            
            
                Start
              
              
            </button>
            
          </form>
          {errorMessage && <div className="error"> {errorMessage} </div>}
            <div>
                <label className ="numberShow">
                    {number}
                </label>
            </div>
            <button onClick={handleClick} style={{display: isBtn ? 'inline' : 'none' }}  class="btn"  type="submit" >
            
            
            Stop
          
          
        </button>
        
        </div>
            </main>
        );
    
}

