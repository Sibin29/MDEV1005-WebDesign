import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 
 
const Welcome = () => {
  const navigate = useNavigate();
 
  // Function to handle login
    const handleLogin = () => {
    navigate('/dashboard');
};

     // Function to handle login
    const handleSignUp = () => {
    navigate('/signup');
};
 
    
  return (
    <div>
      <h2>Welcome to Assignment 2</h2>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignUp}>SignUp</button>
    </div>
  );
};
 
export default Welcome;