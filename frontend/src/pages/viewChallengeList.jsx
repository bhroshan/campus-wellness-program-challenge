import { Grid, Button, Box, CircularProgress, Paper } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChallenges, deleteChallenge } from '../features/challenges/challengeSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import { API_URL } from '../configs';
import { toast } from 'react-toastify';
import NoDataIcon from '@mui/icons-material/SentimentDissatisfied';

function ViewChallengeList() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { challenges, isLoading, isError, message } = useSelector(
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
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '60vh',
                        textAlign: 'center',
                        p: 3
                    }}
                >
                    <NoDataIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
                    <Typography variant="h5" color="text.secondary" gutterBottom>
                        No Challenges Found
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {user?.role === 'coordinator' 
                            ? "Start by creating your first wellness challenge!"
                            : "Check back later for new wellness challenges."}
                    </Typography>
                    {user?.role === 'coordinator' && (
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3 }}
                            onClick={() => navigate('/create-challenge')}
                        >
                            Create Challenge
                        </Button>
                    )}
                </Box>
            ) : (
                <Grid container spacing={3} p={5}>
                    {challenges.map((challenge) => (
                        <Grid item xs={12} sm={6} md={4} key={challenge._id}>
                            <Card>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={challenge.image ? `${API_URL}${challenge.image}` : '/default-challenge.jpg'}
                                    title={challenge.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {challenge.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {challenge.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button 
                                        variant='outlined' 
                                        size="small" 
                                        onClick={() => navigate(`/view-details/${challenge._id}`)}
                                    >
                                        View Details
                                    </Button>
                                    {user?.role === 'coordinator' ? (
                                        <Button 
                                            variant='outlined' 
                                            color="error" 
                                            size="small"
                                            onClick={() => handleDelete(challenge._id)}
                                        >
                                            Delete
                                        </Button>
                                    ) : (
                                        <Button 
                                            variant='outlined' 
                                            color="primary" 
                                            size="small"
                                        >
                                            Join Challenge
                                        </Button>
                                    )}
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    );
}

export default ViewChallengeList;