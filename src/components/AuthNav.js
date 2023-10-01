import { NavLink } from 'react-router-dom';
import { NavLinkWrap } from './Navigations/Navigations.styled';
import { LogOutBtn } from './UserMenu/UserMenu.styled';


export const AuthNav = () => {
  return (
    <NavLinkWrap>
      <NavLink to="/register">
      <LogOutBtn>Registration</LogOutBtn>
      </NavLink>
      <NavLink  to="/login">
      <LogOutBtn>Log In</LogOutBtn>
      </NavLink>
    </NavLinkWrap>
  );
};
