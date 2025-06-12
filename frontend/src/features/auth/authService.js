import axios from 'axios';

const API_URL = '/api/users/';

{
  /* Register user */
}

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const getCurrentUser = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  
  if (!user) {
    return null;
  }

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const response = await axios.get(API_URL + 'me', config);
  return response.data;
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default authService;
