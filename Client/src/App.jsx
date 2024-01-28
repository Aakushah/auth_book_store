import React, { useState} from "react";

import Login from "./Components/Login/Login";

import Home from "./Components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [token, setToken] = useState();





  if (token == undefined || token == null || token == "") {
    return <Login setToken={setToken} />;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/" element={<Home token={token} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
