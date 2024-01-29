import React, { useEffect, useState} from "react";

import Login from "./Components/Login/Login";

import Home from "./Components/Home";



import { BrowserRouter, Routes, Route } from "react-router-dom";



import {useSelector } from 'react-redux';

export default  () => {

  const token=useSelector((state) => state.auth.token);

  console.log(token);

  if (token == undefined) {
    return <Login  />;
  }

  

  return (
    <>

      
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login  />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  );
};
 
