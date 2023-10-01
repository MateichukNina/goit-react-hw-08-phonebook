import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/Auth/authOperations';
import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
import { LogOutBtn, UserMenuWrap } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrap>
      <p>{user.email}</p>
      <NavLink to="/">
        <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
          Logout
        </LogOutBtn>
      </NavLink>
    </UserMenuWrap>
  );
};
