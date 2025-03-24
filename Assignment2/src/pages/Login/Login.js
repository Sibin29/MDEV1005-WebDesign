import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
 
 
const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const pass = useRef();
 
  // Function to handle login
    const handleLogin = () => {
    navigate('/dashboard');
};
 
    
  return (
    <div>
      <h2>Register</h2>
      <form>    
            <label>Email</label>
            <input name="myInput" ref={email} type ="value"/>
            <label>Password</label>
            <input name="myInput" ref={pass} type ="password"/>
            <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};
 
export default Login;