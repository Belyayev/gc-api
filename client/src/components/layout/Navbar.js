import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
        <h1>
          <Link to='/'>Grocery Shopping List</Link>
        </h1>
        <ul>
          <Link to="/about">About</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </ul>
      </nav>
    )
}

export default Navbar