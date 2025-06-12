import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Grid, Button, Box, Typography, Divider } from '@mui/material';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function ViewDetails() {
    const navigate = useNavigate();
    const location = useLocation();
    const { title, description, instructions } = location.state || {};

    return (
        <>
            {/* Go Back Button */}
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
                    },
                }}
            >
                Go Back
            </Button>

            {/* Challenge Details */}
            <Box p={3}><Divider><Typography
                variant="h1"
                sx={{
                    fontWeight: 300,
                    fontSize: { xs: 18, sm: 24 },
                    color: '',
                    letterSpacing: 1,
                    fontFamily: 'Roboto, sans-serif',
                }}
            >
                Challenge Details
            </Typography></Divider></Box>

            <Box>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        hello
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>

            </Box>


        </>
    );
}

export default ViewDetails;
