
import React from 'react'
import Avatar from '@mui/material/Avatar';
import profileImg from '../pages/images/profile.jpg'
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Grid,
    Link,
    Typography,
    TextField,
    Button,
    Paper,
    Divider,
} from '@mui/material';


function Sidebar() {
    const navigate = useNavigate();
    return (
        <>
            <Grid container sx={{ backgroundColor: '#E1F5FE', width: '100%', height: '100vh' }} flexDirection={'column'}>
                <Grid
                    item
                    sm={12}
                    sx={{
                        backgroundColor: '#E0E0E0',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Centers horizontally
                        justifyContent: 'center', // Centers vertically (if height is defined)
                        py: 2, // Padding top & bottom
                    }}
                >
                    <Avatar
                        alt="Profile Image"
                        src={profileImg}
                        sx={{ width: 100, height: 100, mb: 2 }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 500 }} px={2}>
                        Roshan Bhandary
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: 'gray' }} px={2}>
                        Coordinator
                    </Typography>
                </Grid>

                <Divider sx={{ mt: 0.5, color: 'black' }} />

                <Grid
                    item
                    sm={12}
                    sx={{

                        backgroundColor: '#E1F5FE',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        px: 2,
                        gap: 2,
                        pt: 2,
                    }}
                >
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => navigate('/dashboard')}
                    >
                        Dashboard
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => navigate('/dashboard')}
                    >
                        Create Wellness Challenge
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => navigate('/dashboard')}
                    >
                        View Challenge List
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => navigate('/dashboard')}
                    >
                        Enroll Participant
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Sidebar