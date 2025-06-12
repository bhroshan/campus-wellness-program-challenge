import Home from '../pages/Home';
import Login from '../pages/login';
import Register from '../pages/register';
import Dashboard from '../pages/Dashboard';

// Public routes configuration
export const publicRoutes = [
  {
    path: '/',
    component: Home,
    title: 'Home',
  },
  {
    path: '/login',
    component: Login,
    title: 'Login',
  },
  {
    path: '/register',
    component: Register,
    title: 'Register',
  },
];

// Private routes configuration
export const privateRoutes = [
  {
    path: '/dashboard',
    component: Dashboard,
    title: 'Dashboard',
  },
]; 