import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from "./Pages/Home";
import Login from './Pages/Login';
import Register from './Pages/Register';
import Layout from "./Components/Layout"

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;