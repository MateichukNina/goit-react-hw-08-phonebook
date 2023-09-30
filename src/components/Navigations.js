import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <ul>
        {isLoggedIn ? (
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