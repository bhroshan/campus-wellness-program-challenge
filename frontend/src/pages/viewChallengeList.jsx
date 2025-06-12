import { Grid, Button, Box, CircularProgress, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChallenges, deleteChallenge, joinChallenge, leaveChallenge } from '../features/challenges/challengeSlice';
import { useNavigate } from 'react-router-dom';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import { toast } from 'react-toastify';
import ChallengeCard from '../components/ChallengeCard';

function ViewChallengeList() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { challenges, isLoading, isError, message, joinedChallenges } = useSelector(
        (state) => state.challenges
    );
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getChallenges());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
    }, [isError, message]);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this challenge?')) {
            dispatch(deleteChallenge(id));
        }
    };

    const handleJoinChallenge = (id) => {
        dispatch(joinChallenge(id))
            .unwrap()
            .then(() => {
                dispatch(getChallenges());
                toast.success('Successfully joined the challenge!');
            })
            .catch((error) => {
                toast.error(error);
            });
    };

    const handleLeaveChallenge = (id) => {
        if (window.confirm('Are you sure you want to leave this challenge?')) {
            dispatch(leaveChallenge(id))
                .unwrap()
                .then(() => {
                    dispatch(getChallenges());
                    toast.success('Successfully left the challenge!');
                })
                .catch((error) => {
                    toast.error(error);
                });
        }
    };

    const handleViewDetails = (id) => {
        navigate(`/view-details/${id}`);
    };

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <>
            <Button
                variant="contained"
                fullWidth
                startIcon={<AssignmentReturnIcon />}
                onClick={() => navigate('/dashboard')}
                sx={{
                    mx: 'auto',
                    display: 'flex',
                    color: 'black',
                    alignItems: 'center',
                    backgroundColor: "#EEEEEE",
                    '&:hover': {
                        backgroundColor: "#BDBDBD",
                    }
                }}
            >
                Go Back
            </Button>

            {challenges.length === 0 ? (
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '70vh',
                    flexDirection: 'column',
                    gap: 2
                }}>
                    <Typography variant="h5" color="text.secondary">
                        No challenges available
                    </Typography>
                    {user?.role === 'coordinator' && (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => navigate('/create-challenge')}
                        >
                            Create New Challenge
                        </Button>
                    )}
                </Box>
            ) : (
                <Grid container spacing={3} p={5}>
                    {challenges.map((challenge) => (
                        <Grid item xs={12} sm={6} md={4} key={challenge._id}>
                            <ChallengeCard
                                challenge={challenge}
                                onViewDetails={handleViewDetails}
                                onAction={user?.role === 'coordinator' ? handleDelete : 
                                    joinedChallenges.includes(challenge._id) ? handleLeaveChallenge : handleJoinChallenge}
                                actionLabel={user?.role === 'coordinator' ? 'Delete' : 
                                    joinedChallenges.includes(challenge._id) ? 'Leave Challenge' : 'Join Challenge'}
                                actionColor={user?.role === 'coordinator' ? 'error' : 
                                    joinedChallenges.includes(challenge._id) ? 'error' : 'primary'}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    );
}

export default ViewChallengeList;