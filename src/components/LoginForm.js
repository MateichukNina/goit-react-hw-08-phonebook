import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/Auth/authOperations';
import { LogOutBtn } from './UserMenu/UserMenu.styled';
import { StyledForm, StyledField, StyledLable } from './FormRegister/FormRegister.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLable>
        Email
        <StyledField type="email" name="email" />
      </StyledLable>
      <StyledLable>
        Password
        <StyledField type="password" name="password" />
      </StyledLable>
      <LogOutBtn type="submit">Log In</LogOutBtn>
    </StyledForm>
  );
};
