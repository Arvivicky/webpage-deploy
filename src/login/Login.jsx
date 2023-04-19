import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import BgImage from './Fotor_AI.png'
import './Login.css'

const Login = () => {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const navigateTo = useNavigate();
  

  const validateCredentials = () => {
    console.log(username,password)
    if (username === "Arvind" && password === "eee@2020") 
    {
      
      console.log('Logged-in');
      return true;
    }
    else{
      alert('Invalid credentials');
      console.log('Invalid');
      return false;
    }
  };

  const onSubmitButton = (event) => {
    event.preventDefault();
    if (validateCredentials()) {
      navigateTo('/upload')
    }
  };

  return (
    <div className="loginbody" style={{backgroundImage:`url(${BgImage})`}}>
      <div className="logindiv">
        <h1 className="hi">Hi.!</h1>
        <form className="form" id="loginform" onSubmit={onSubmitButton}>
          <label htmlFor="username" className="Username">
            <span className="usertitle">User Name</span>
            <input className='user' 
              type="text" 
              id="username" 
              name="username" 
              placeholder="Username" 
              value={username} 
              onChange={(event)=> setUsername(event.target.value)}
            />
          </label>
          <label htmlFor="password" className="Password">
            <span className="passtitle">Password</span>
            <input className="pass"
              type="password" 
              id="password" 
              name="password" 
              placeholder="Password" 
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
            />
          </label>
          <button type="submit" className="submitbtn" id="login">
            <span>Submit</span>
          </button>
          <span className="forgot">Forgot Password?</span>
        </form>
      </div>
    </div>
  );
};

export default Login;
