import React from 'react'
import {
    AppBar,
    Box,
    Button,
    Typography,
    Grid
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ p: 2, backgroundColor: '#424242' }}>
                    <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Grid item> <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Campus Wellness Challenge Platform
                        </Typography></Grid>

                        <Grid item> <Button
                            onClick={onLogout}
                            variant="contained"
                            fullWidth
                            startIcon={<ExitToAppIcon />}
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
                            Logout
                        </Button></Grid>


                    </Grid>
                </AppBar>
            </Box>
        </>
    );
};

export default Navbar;
