import React from 'react';
import './style.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import NavBar from './NavBar.js';
import Page404 from './Page404.js';
import User from './Users.js';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="/*" element={<Page404 />} />
        {/* <Route path="/*" element={<Navigate to="/"/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
