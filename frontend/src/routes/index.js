import Home from '../pages/Home';
import Login from '../pages/login';
import Register from '../pages/register';
import Dashboard from '../pages/Dashboard';
import CreateChallenge from '../pages/CreateChallenge';
import ViewChallengeList from '../pages/viewChallengeList';
import JoinedChallenge from '../pages/JoinedChallenge';
import ViewDetails from '../pages/viewDetails';
import { compose } from '@reduxjs/toolkit';

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
  {
    path: '/view-challenge-list',
    component: ViewChallengeList,
    title: 'ViewChallengeList',
  },
  {
    path: '/create-challenge',
    component: CreateChallenge,
    title: 'CreateChallenge',
  },
  {
    path: '/joined-challenge',
    component: JoinedChallenge,
    title: 'JoinedChallenge',
  },
  {
    path: '/view-details',
    component: ViewDetails,
    title: 'ViewDetails',
  },
];
