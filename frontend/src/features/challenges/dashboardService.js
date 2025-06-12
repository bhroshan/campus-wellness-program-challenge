import axios from 'axios';

const API_URL = '/api/dashboard/';

export const getStudentDashboardStats = async (token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const response = await axios.get(API_URL + 'student', config);
    return response.data;
};

export const getCoordinatorDashboardStats = async (token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const response = await axios.get(API_URL + 'coordinator', config);
    return response.data;
};
