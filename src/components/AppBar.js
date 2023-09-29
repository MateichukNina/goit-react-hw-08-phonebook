import { AuthNav } from "./AuthNav";
import Navigation from "./Navigations";
import { UserMenu } from "./UserMenu";
import { useAuth } from "hooks/useAuth";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
      <header>
          <Navigation />
          {isLoggedIn ? <UserMenu/> : <AuthNav/>} 
      </header>
  )
}