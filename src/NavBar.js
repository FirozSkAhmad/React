import React from 'react';
import {Link} from 'react-router-dom'
import './style.css';

function NavBar() {
  return (
    <ul className="NavStyle">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  );
}
export default NavBar;
