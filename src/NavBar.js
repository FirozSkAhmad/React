import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function NavBar() {
  return (
    <ul className="NavStyle">
      <li>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? 'red' : 'black' };
          }}
          className="NavBar-Link"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? 'red' : 'black' };
          }}
          className="NavBar-Link"
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? 'red' : 'black' };
          }}
          className="NavBar-Link"
          to="/filter"
        >
          Filter
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? 'red' : 'black' };
          }}
          className="NavBar-Link"
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
}
export default NavBar;
