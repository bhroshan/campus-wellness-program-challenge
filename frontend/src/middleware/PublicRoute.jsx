import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return null; // or a loading spinner
  }

  return !isAuthenticated ? children : <Navigate to="/dashboard" />;
};

export default PublicRoute; 