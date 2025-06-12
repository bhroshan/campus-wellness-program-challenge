import axios from 'axios';

const API_URL = '/api/challenges/';

// Create new challenge
const createChallenge = async (challengeData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    };

    const response = await axios.post(API_URL, challengeData, config);
    return response.data;
};

// Get user challenges
const getChallenges = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const response = await axios.get(API_URL, config);
    return response.data;
};

// Update challenge
const updateChallenge = async (challengeId, challengeData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    };

    const response = await axios.put(API_URL + challengeId, challengeData, config);
    return response.data;
};

const challengeService = {
    createChallenge,
    getChallenges,
    updateChallenge
};

export default challengeService; 