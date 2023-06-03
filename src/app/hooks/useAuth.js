import { useSelector } from 'react-redux';
import { getIsLoggedIn, getIsRefreshing, getUser } from 'app/auth/selectors';

const useAuth = () => {
  const user = useSelector(getUser);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);

  return {
    user,
    isLoggedIn,
    isRefreshing,
  };
};

export default useAuth;
