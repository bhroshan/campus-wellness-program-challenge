import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import challengeService from './challengeService';

const initialState = {
    challenges: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

// Create new challenge
export const createChallenge = createAsyncThunk(
    'challenges/create',
    async (challengeData, thunkAPI) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const token = user?.token;
            return await challengeService.createChallenge(challengeData, token);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
                || error.message 
                || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get user challenges
export const getChallenges = createAsyncThunk(
    'challenges/getAll',
    async (_, thunkAPI) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const token = user?.token;
            return await challengeService.getChallenges(token);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
                || error.message 
                || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Update challenge
export const updateChallenge = createAsyncThunk(
    'challenges/update',
    async ({ id, challengeData }, thunkAPI) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const token = user?.token;
            return await challengeService.updateChallenge(id, challengeData, token);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
                || error.message 
                || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const challengeSlice = createSlice({
    name: 'challenge',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createChallenge.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createChallenge.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.challenges.push(action.payload);
            })
            .addCase(createChallenge.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getChallenges.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getChallenges.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.challenges = action.payload;
            })
            .addCase(getChallenges.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(updateChallenge.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateChallenge.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.challenges = state.challenges.map(challenge => 
                    challenge._id === action.payload._id ? action.payload : challenge
                );
            })
            .addCase(updateChallenge.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    }
});

export const { reset } = challengeSlice.actions;
export default challengeSlice.reducer; 