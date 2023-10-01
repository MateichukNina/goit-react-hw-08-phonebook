import { useDispatch } from 'react-redux';
import { register } from 'Redux/Auth/authOperations';
import { LogOutBtn } from '../UserMenu/UserMenu.styled';
import { StyledForm, StyledField, StyledLable } from './FormRegister.styled';


export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLable >
        Username
        <StyledField type="text" name="name" />
      </StyledLable>
      <StyledLable >
        Email
        <StyledField type="email" name="email" />
      </StyledLable>
      <StyledLable>
        Password
        <StyledField type="password" name="password" />
      </StyledLable>
      <LogOutBtn type="submit">Register</LogOutBtn>
    </StyledForm>
  );
};
