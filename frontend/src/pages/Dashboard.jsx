import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import {
    AppBar,
    Box,
    Button,
    CssBaseline,
    Drawer,
    Toolbar,
    Typography,
    Grid
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <Grid container>
                <Grid item sm={3}>
                    <Sidebar />
                </Grid>
            </Grid>

        </>
    );
};

export default Dashboard;
