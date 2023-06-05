import { useAuth } from 'app/hooks';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldReddirect = !isLoggedIn && !isRefreshing;
  console.log(shouldReddirect);

  return shouldReddirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
