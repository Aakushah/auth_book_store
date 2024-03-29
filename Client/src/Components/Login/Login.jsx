import React, { useState } from "react";
import "./Login.css";

import { useDispatch, useSelector } from 'react-redux';

import { setToken } from '../../features/authSlice';



const Login = () => {
 

  const token = useSelector((state) => state.auth.token);
  
  const dispatch = useDispatch();


  //VARIABLE FOR STORING THE TEMPORARY VALUE OF LOGIN CREDENTIALS...

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");


  async function loginUser(credentials) {
    try {

      const response = await fetch("http://localhost:8000/login", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),

      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;

    } catch (error) {

      console.error("Error during login:", error);
      throw error;

    }


  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newtoken = await loginUser({
      username,
      password,
    });

    

    dispatch(setToken(newtoken));

  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
