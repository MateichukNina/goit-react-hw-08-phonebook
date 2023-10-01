import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { LogOutBtn } from '../UserMenu/UserMenu.styled';
import { NavWrap } from './Navigations.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavWrap>
      <NavLink  to="/">
       <LogOutBtn>Home</LogOutBtn>
      </NavLink>
      {isLoggedIn && (
        <NavLink  to="/contacts">
         <LogOutBtn>Contacts</LogOutBtn>
        </NavLink>
      )}
    </NavWrap>
  );
};
