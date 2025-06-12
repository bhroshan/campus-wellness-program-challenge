import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Typography, Grid } from '@mui/material';

const Dashboard = () => {
    return (
        <Box sx={{ width: '100%' }}>
            {/* Dashboard Title */}
            <Box sx={{ mb: 3 }}>
                <Typography
                    variant="h5"
                    sx={{ fontWeight: 330, letterSpacing: 1 }}
                >
                    Dashboard
                </Typography>
            </Box>

            {/* Home Info Box */}
            <Box
                sx={{
                    backgroundColor: 'white',
                    p: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    mb: 4,
                    borderRadius: 1
                }}
            >
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 280, letterSpacing: 1 }}
                >
                    Home
                </Typography>
                <Box sx={{
                    display: 'flex',
                    gap: 4,
                    alignItems: 'center',
                }}>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 280, letterSpacing: 1 }}
                    >
                        {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 280, letterSpacing: 1 }}
                    >
                        {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </Typography>
                </Box>
            </Box>

            {/* Card Box */}
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ 
                        backgroundColor: '#BDBDBD', 
                        borderRadius: 2,
                        height: '100%'
                    }}>
                        <CardContent>
                            <Typography variant="h4" sx={{ color: 'black', mb: 1 }}>
                                20
                            </Typography>
                            <Typography variant="h6" sx={{ color: 'black' }}>
                                Total Challenges
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ 
                        backgroundColor: '#BDBDBD', 
                        borderRadius: 2,
                        height: '100%'
                    }}>
                        <CardContent>
                            <Typography variant="h4" sx={{ color: 'black', mb: 1 }}>
                                20
                            </Typography>
                            <Typography variant="h6" sx={{ color: 'black' }}>
                                Active Participants
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
