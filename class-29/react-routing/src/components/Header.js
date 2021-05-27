import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <h1>Cool App Logo</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/list">List</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;