import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Navbar = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#424242' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Campus Wellness Challenge
                </Typography>
                <Button 
                    color="inherit" 
                    onClick={handleLogout}
                    startIcon={<ExitToAppIcon />}
                >
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
