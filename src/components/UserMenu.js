import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/Auth/authOperations';
import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>{user.name}</p>
      <NavLink to="/">
        <button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </button>
      </NavLink>
    </div>
  );
};
