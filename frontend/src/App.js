import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from "./Pages/Home";
import Login from './Pages/Login';
import Register from './Pages/Register';
import Layout from "./Components/Layout"
import Blog from './Pages/Blog';
import Reports from './Pages/Reports';
import About from './Pages/About';
import Contact from './Pages/Contact';
import DetectDisease from './Pages/DetectDisease';
import DetectSkinCancer from './Pages/DetectSkinCancer';
import PostDetails from './Pages/PostDetails';

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detect-disease" element={<DetectDisease/>} />
        <Route path="/detect-skin-cancer" element={<DetectSkinCancer/>} />
        <Route path="/postDetails" element={<PostDetails/>} />
      </Route>
    </Routes>
  );
}

export default App;