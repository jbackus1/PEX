import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Cities App</h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/cities" className={({ isActive }) => isActive ? 'active-link' : ''}>
            Cities List
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-city" className={({ isActive }) => isActive ? 'active-link' : ''}>
            Add City
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;