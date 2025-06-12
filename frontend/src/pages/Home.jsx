
import React from 'react'
import { Box, Button, Typography, Grid, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#E1F5FE', // Optional background color
                textAlign: 'center',
                padding: 2,
            }}
        >
            <Typography variant="h3" fontWeight="bold" gutterBottom>
                Campus Wellness Challenge Platform
            </Typography>

            <Divider my={2} minheight={5} />

            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Button variant="outlined" component={Link} to="/login" color="primary" size="large">
                        LOGIN
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" component={Link} to="/register" color="primary" size="large">
                        Register
                    </Button>
                </Grid>
            </Grid>
        </Box >
    );
};

export default Home;
