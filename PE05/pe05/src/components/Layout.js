import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import NavBar from './NavBar';

function Layout() {
  return (
    <div className="app-container">
      <NavBar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;