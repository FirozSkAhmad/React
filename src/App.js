import React from 'react';
import './style.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import NavBar from './NavBar.js';
import Page404 from './Page404.js';
import User from './Users.js';
import Filter from './Filter.js';
import Contact from './Contact.js';
import Company from './Company.js';
import Channel from './Channel.js';
import Other from './Other.js';
import Login from './Login.js';
import ProtectedRoute from './ProtectedRoute.js';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProtectedRoute Component={Home} />} />
        <Route path="/about" element={<ProtectedRoute Component={About} />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="/filter" element={<ProtectedRoute Component={Filter} />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/*" element={<Navigate to="/"/>} /> */}
        <Route path="/contact/" element={<Contact />}>
          <Route path="company" element={<Company />} />
          <Route path="channel" element={<Channel />} />
          <Route path="other" element={<Other />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
