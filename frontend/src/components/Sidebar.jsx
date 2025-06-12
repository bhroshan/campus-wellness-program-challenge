import React from 'react'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
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
import PersonIcon from '@mui/icons-material/Person';

function Sidebar() {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    
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
                        alignItems: 'center',
                        justifyContent: 'center',
                        py: 2,
                    }}
                >
                    <Avatar
                        alt={`${user.first_name} ${user.last_name}`}
                        src={user.profile_image ? `http://localhost:5000${user.profile_image}` : null}
                        sx={{ width: 100, height: 100, mb: 2 }}
                    >
                        {!user.profile_image && <PersonIcon sx={{ fontSize: 60 }} />}
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 500 }} px={2}>
                        {`${user.first_name} ${user.last_name}`}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: 'gray' }} px={2}>
                        {user.role}
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
                        onClick={() => navigate('/create-challenge')}
                    >
                        Create Wellness Challenge
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => navigate('/view-challenge-list')}
                    >
                        View Challenge List
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => navigate('/joined-challenge')}
                    >
                        Joined challenges
                    </Button>

                </Grid>
            </Grid>
        </>
    )
}

export default Sidebar