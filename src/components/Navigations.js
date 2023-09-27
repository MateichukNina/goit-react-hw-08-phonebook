import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <ul>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;