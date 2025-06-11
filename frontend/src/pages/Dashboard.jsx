import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

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
            <Box sx={{ backgroundColor: '#EEEEEE' }}>

                {/* navbar component */}
                <Navbar />


                <Grid container display={'flex'}>

                    {/* sidebar component */}
                    <Grid item sm={3}>
                        <Sidebar />
                    </Grid>




                    {/* Right Main Content */}
                    <Grid item sm={9}>
                        <Grid container display={'flex'} flexDirection={'column'}>
                            <Grid item sm={12} sx={{ p: 2 }} >
                                {/* Dashboard Title */}
                                <Box sx={{ width: '100%', mb: 2 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{ fontWeight: 330, letterSpacing: 1 }}
                                    >
                                        Dashboard
                                    </Typography>
                                </Box>
                            </Grid>
                            {/* Home Info Box */}

                            <Grid item sm={12}>
                                <Box
                                    sx={{
                                        backgroundColor: 'white',
                                        p: 2,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        width: '100%',
                                    }}
                                >
                                    <Box>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: 280, letterSpacing: 1 }}
                                        >
                                            Home
                                        </Typography>
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        gap: 4,
                                        alignItems: 'center',

                                    }}>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: 280, letterSpacing: 1 }}
                                        >
                                            10:30 PM
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: 280, letterSpacing: 1 }}
                                        >
                                            20 May 2025
                                        </Typography>
                                    </Box>

                                </Box>
                            </Grid>


                            {/* Card Box */}
                            <Grid item sm={12} sx={{ p: 2, mt: 6, display: 'flex' }} >
                                {/* cards */}
                                <Box sx={{ width: '100%', mb: 2, }}>
                                    <Card sx={{ minWidth: 275, backgroundColor: '#BDBDBD', boxShadow: '2', borderRadius: '8', borderTopRightRadius: '0', borderBottomLeftRadius: '0' }}>
                                        <CardContent display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                                            <Typography gutterBottom sx={{ color: 'black', fontSize: 14 }}>
                                                20
                                            </Typography>
                                            <Typography sx={{ color: 'black', mb: 1.5 }}>Active Participants</Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                                <Box sx={{ width: '100%', mb: 2 }}>
                                    <Card sx={{ minWidth: 275, backgroundColor: '#BDBDBD', boxShadow: '2', borderRadius: '8', borderTopRightRadius: '0', borderBottomLeftRadius: '0' }}>
                                        <CardContent display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                                            <Typography gutterBottom sx={{ color: 'black', fontSize: 14 }}>
                                                20
                                            </Typography>
                                            <Typography sx={{ color: 'black', mb: 1.5 }}>Active Participants</Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>
            </Box >


        </>
    );
};

export default Dashboard;
