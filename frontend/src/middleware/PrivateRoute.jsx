import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return null; // or a loading spinner
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute; 