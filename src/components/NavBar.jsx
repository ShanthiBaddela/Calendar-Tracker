import React from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Calendar Tracking</div>
      <ul className="nav-links">
        <li><a href="/admin">Admin</a></li>
        <li><a href="/user">User</a></li>
        <li><a href="/report">Reports</a></li>
        
      </ul>
    </nav>
  );
};

export default NavBar;
