import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Link,
    Paper,
    Divider,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Loading from '../components/Loading';

const Register = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        role: '',
        password: '',
        confirmPassword: '',
    });

    const { first_name, last_name, email, gender, role, password, confirmPassword } = formData
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess || user) {
            navigate('/dashboard')
        }
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,

        }))
    }

    // const handleChange = (e) => {
    //     const { name, value, type, checked } = e.target;
    //     setFormData((prev) => ({
    //         ...prev,
    //         [name]: type === 'checkbox' ? checked : value,
    //     }));
    // };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Password do not match')
        } else {
            const userData = { first_name, last_name, email, gender, role, password, confirmPassword }

            dispatch(register(userData))
        }

        // console.log(formData);
    };
    // if (isLoading) {
    //     return <Loading />
    // }
    return (
        <Paper
            elevation={8}
            sx={{
                width: '100%',
                maxWidth: 800,
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                border: '3px solid gray',
                mx: 'auto',
                mt: 2,
                p: 4,
            }}
        >
            <Box sx={{ flex: 1 }}>
                <Box borderBottom={1} borderColor="grey.700" sx={{ mb: 3 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            mb: 1,
                            fontSize: 27,
                            fontWeight: 450,
                            textAlign: 'center',
                            color: 'text.primary',
                            fontFamily: 'Roboto, sans-serif',
                        }}
                    >
                        Campus Wellness Challenge Platform
                    </Typography>
                </Box>

                <Box sx={{ border: 1, borderColor: 'grey.700' }}>

                    {/* from start */}

                    <form onSubmit={handleSubmit} style={{ padding: '20px', margin: '10px' }}>

                        {/* Registration Title */}
                        <Divider><Typography
                            variant="h1"
                            sx={{
                                fontWeight: 300,
                                fontSize: { xs: 18, sm: 24 },
                                color: '',
                                letterSpacing: 1,
                                fontFamily: 'Roboto, sans-serif',
                            }}
                        >
                            Sign Up
                        </Typography></Divider>


                        <Grid container columnSpacing={17}>

                            {/* first_name field */}

                            <Grid item xs={12} sm={6}>
                                <Box p={4} pt={3} pb={0} sx={{ width: '100%' }}><TextField
                                    label="First Name"
                                    name='first_name'
                                    id='first_name'
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                    type="text"
                                    value={first_name}
                                    onChange={onChange}
                                /></Box>
                            </Grid>

                            {/* last_name field */}

                            <Grid item xs={12} sm={6}>
                                <Box p={4} pt={3} pb={0} sx={{ width: '100%' }}><TextField
                                    label="Last Name"
                                    name='last_name'
                                    id='last_name'
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                    type="text"
                                    value={last_name}
                                    onChange={onChange}
                                /></Box>
                            </Grid>

                            {/* Email field */}

                            <Grid item xs={12} sm={6}>
                                <Box p={4} pt={0} pb={0} sx={{ width: '100%' }}><TextField
                                    label="Email"
                                    id='email'
                                    name='email'
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                    type="email"
                                    value={email}
                                    onChange={onChange}
                                /></Box>
                            </Grid>

                            {/* Gender Radio Buttons */}

                            <Grid item xs={12} sm={6}>
                                <Box p={4} pt={1.5} pb={0} sx={{ width: '100%' }}><FormControl component="fieldset" required>
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup
                                        row
                                        name="gender"
                                        id='gender'
                                        value={gender}
                                        onChange={onChange}
                                    >
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="others" control={<Radio />} label="Others"/>
                                    </RadioGroup>
                                </FormControl></Box>
                            </Grid>

                            {/* password field */}

                            <Grid item xs={12} sm={6}>
                                <Box p={4} pt={0} pb={0} sx={{ width: '100%' }}><TextField
                                    label="Password"
                                    id='password'
                                    name='password'
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                    type="password"
                                    value={password}
                                    onChange={onChange}
                                /></Box>
                            </Grid>

                            {/* confirm_password field */}

                            <Grid item xs={12} sm={6}>
                                <Box p={4} pt={0} pb={0} sx={{ width: '100%' }}><TextField
                                    label="Confirm Password"
                                    id='confirmPassword'
                                    name='confirmPassword'
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                    type="password"
                                    value={confirmPassword}
                                    onChange={onChange}
                                /></Box>
                            </Grid>

                            {/* Role Radio Buttons */}

                            <Grid item xs={12} sm={6}>
                                <Box p={4} pt={1.5} pb={0} sx={{ width: '100%' }}><FormControl component="fieldset" required>
                                    <FormLabel component="legend">Role</FormLabel>
                                    <RadioGroup
                                        row
                                        name="role"
                                        id='role'
                                        value={role}
                                        onChange={onChange}
                                    >
                                        <FormControlLabel value="coordinator" control={<Radio />} label="Coordinator" />
                                        <FormControlLabel value="student" control={<Radio />} label="Student" />
                                    </RadioGroup>
                                </FormControl></Box>
                            </Grid>

                        </Grid>
                        {/* Sign Up Button / Register */}

                        <Grid item xs={12}><Button
                            type="submit"
                            id='submit'
                            variant="contained"
                            fullWidth
                            startIcon={<PersonAddIcon />}
                            sx={{
                                mt: 3,
                                width: '630px',
                                mx: 'auto',
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: "#424242",
                                '&:hover': {
                                    backgroundColor: "black",

                                }


                            }}
                        >
                            Register
                        </Button>
                        </Grid>
                    </form>

                    {/* from ends */}

                </Box>
            </Box >
        </Paper >
    );
};

export default Register;
