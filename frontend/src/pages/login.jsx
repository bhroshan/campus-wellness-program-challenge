
import React from 'react';
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
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import bannerImage from './images/banner.jpg';

const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic
    };

    return (
        <>

            <Box
                width={1}
                height={1}

                sx={{
                    height: '95vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f5f5f5',

                }}
            >



                <Paper elevation={8} sx={{ width: 1150, height: 500, display: 'flex', borderRadius: 4, border: '3px solid gray' }}>
                    {/* Left Side - Avatar Banner */}
                    <Grid
                        width={2 / 4}
                        item
                        xs={6}
                        sx={{
                            backgroundColor: 'primary.light',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderTopLeftRadius: 16,
                            borderBottomLeftRadius: 16,
                        }}
                    >

                        <img
                            src={bannerImage}
                            alt="Login banner"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: 12, borderBottomLeftRadius: 12 }}
                        />
                    </Grid>

                    {/* Right Side - Login Form */}
                    <Grid


                        width={2 / 4}
                        item
                        xs={7}
                        sx={{
                            p: 4,
                            m: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            border: '1px solid gray',
                            borderRadius: '5px',
                        }}
                    >
                        {/* Title */}
                        <Box borderBottom={1} borderColor='grey.700' sx={{ mb: 5 }}><Typography
                            variant="h4"
                            sx={{
                                mb: 1,
                                fontSize: 27,
                                fontWeight: 450,
                                textAlign: 'center',
                                color: 'primary.gray',
                                fontFamily: 'Roboto, sans-serif',

                            }}
                        >
                            Campus Wellness Challenge Platform


                        </Typography></Box>

                        {/* Registration Title */}
                        <Divider sx={{ marginBottom: 2 }}><Typography
                            variant="h1"
                            sx={{
                                fontWeight: 300,
                                fontSize: { xs: 18, sm: 21 },
                                color: '',
                                letterSpacing: 1,
                                fontFamily: 'Roboto, sans-serif',

                            }}
                        >
                            Log In
                        </Typography></Divider>

                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required
                                type="email"
                            />
                            <TextField
                                label="Password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required
                                type="password"
                            />


                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                startIcon={<LoginIcon />}
                                sx={{
                                    width: '420px',
                                    mx: 'auto',
                                    display: 'flex',
                                    alignItems: 'center',
                                    mt: 3,
                                    backgroundColor: "#424242",
                                    '&:hover': {
                                        backgroundColor: "black",

                                    }
                                }}

                            >
                                Login
                            </Button>

                            {/* Register link */}
                            <Typography
                                variant="body2"
                                sx={{ mt: 2, textAlign: 'center' }}
                            >
                                Don’t have an account?{' '}
                                <Link
                                    component="button"
                                    variant="body2"
                                    onClick={() => navigate('/register')} // Update route
                                    underline="hover"
                                >
                                    Register
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Paper>
            </Box >
        </>
    );
};

export default Login;
