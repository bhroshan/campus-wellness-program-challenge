import { Grid, Button, } from '@mui/material';
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import Profile from '../pages/images/profile.jpg'
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';

function ViewChallengeList() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
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
            <Grid container p={5}>
                <Grid item xs={'10'} mx={'3'}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={Profile}
                            title="title"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Title
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Discription are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant='outlined' size="small" onClick={() => navigate('/view-details')}>View Details</Button>
                            <Button variant='outlined' size="small">Delete</Button>
                        </CardActions>
                    </Card>
                </Grid>


            </Grid>
        </>
    )
}

export default ViewChallengeList;