import { Grid, Button, Box, CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChallenges } from '../features/challenges/challengeSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import { API_URL } from '../configs';

function ViewChallengeList() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { challenges, isLoading, isError, message } = useSelector(
        (state) => state.challenges
    );

    useEffect(() => {
        dispatch(getChallenges());
    }, [dispatch]);

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
                                <Button 
                                    variant='outlined' 
                                    color="error" 
                                    size="small"
                                >
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default ViewChallengeList;