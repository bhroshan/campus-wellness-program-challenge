import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import PrivateRoute from './middleware/PrivateRoute';
import PublicRoute from './middleware/PublicRoute';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './features/auth/authSlice';
import { publicRoutes, privateRoutes } from './routes';

const AppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      {/* Public Routes */}
      {publicRoutes.map(({ path, component: Component, title }) => (
        <Route
          key={path}
          path={path}
          element={
            <PublicRoute>
              <Component />
            </PublicRoute>
          }
        />
      ))}

      {/* Private Routes */}
      {privateRoutes.map(({ path, component: Component, title }) => (
        <Route
          key={path}
          path={path}
          element={
            <PrivateRoute>
              <Component />
            </PrivateRoute>
          }
        />
      ))}
    </Routes>
  );
};

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <AppContent />
        </Provider>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
