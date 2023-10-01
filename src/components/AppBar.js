import {Navigation} from './Navigations/Navigations';
import { UserMenu } from './UserMenu/UserMenu';
import { AuthNav } from './AuthNav';
import { useAuth } from 'hooks';
import { AppHeader } from './AppBar/AppBar.styled';


export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppHeader >
       <Navigation /> 
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppHeader>
  );
};