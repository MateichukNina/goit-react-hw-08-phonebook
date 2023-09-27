import { useSelector } from "react-redux";
import { selectUser, selectIsLoggedIn, selectIsRefreshing } from "Redux/Auth/authSelectors";

export const useAuth = () =>{
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    user: useSelector(selectUser),
    isRefreshing: useSelector(selectIsRefreshing),
  };
} ;