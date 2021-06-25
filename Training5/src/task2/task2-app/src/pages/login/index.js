import { useContext, useRef,React } from "react";
import "./index.css";
import { useDispatch } from 'react-redux';
import { loginCall } from "../../api/index";



export default function Login() {
  const username = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const [data, setData] = React.useState({
    email: '',
    password: '',

  });
 


  const handleClick = React.useCallback(() => {
    
    console.log(data);
   /// dispatch(createPost.createPostRequest(data));
  
 
      
  });

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">NguyenTranPhu Blog</h3>
          <span className="loginDesc">
            Connect with friends and the world around you .
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              type="username"
              required
              className="loginInput"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <button className="loginButton" type="submit" >
            
                "Log In"
         
            </button>
           
          </form>
        </div>
      </div>
    </div>
  );
}
