import { Link } from "react-router-dom";

import { useAuth } from "hooks/useAuth";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
      <header>
        <Link to='/'>Home</Link>
        <Link to='contacts'>Contacts</Link>
        <Link to='register'>Registration</Link>
        <Link to='login'>LogIn</Link>
      </header>
  )
}