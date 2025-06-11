import React, { useState } from 'react';
import {
    Box,
    Button,
    Checkbox,
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

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        role: '',
        password: '',
        confirmPassword: '',
        terms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (!formData.terms) {
            alert("You must agree to the Terms and Conditions.");
            return;
        }

        console.log(formData);
    };

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
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                    type="text"
                                /></Box>
                            </Grid>

                            {/* last_name field */}

                            <Grid item xs={12} sm={6}>
                                <Box p={4} pt={3} pb={0} sx={{ width: '100%' }}><TextField
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                    type="text"
                                /></Box>
                            </Grid>

                            {/* Email field */}

                            <Grid item xs={12} sm={6}>
                                <Box p={4} pt={0} pb={0} sx={{ width: '100%' }}><TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                    type="email"
                                /></Box>
                            </Grid>

                            {/* Gender Radio Buttons */}

                            <Grid item xs={12} sm={6}>
                                <Box p={4} pt={1.5} pb={0} sx={{ width: '100%' }}><FormControl component="fieldset" required>
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup
                                        row
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </FormControl></Box>
                            </Grid>

                            {/* password field */}

                            <Grid item xs={12} sm={6}>
                                <Box p={4} pt={0} pb={0} sx={{ width: '100%' }}><TextField
                                    label="Password"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                    type="password"
                                /></Box>
                            </Grid>

                            {/* confirm_password field */}

                            <Grid item xs={12} sm={6}>
                                <Box p={4} pt={0} pb={0} sx={{ width: '100%' }}><TextField
                                    label="Confirm Password"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                    type="password"
                                /></Box>
                            </Grid>

                            {/* Role Radio Buttons */}

                            <Grid item xs={12} sm={6}>
                                <Box p={4} pt={1.5} pb={0} sx={{ width: '100%' }}><FormControl component="fieldset" required>
                                    <FormLabel component="legend">Role</FormLabel>
                                    <RadioGroup
                                        row
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="Coordinator" control={<Radio />} label="Coordinator" />
                                        <FormControlLabel value="Student" control={<Radio />} label="Student" />
                                    </RadioGroup>
                                </FormControl></Box>
                            </Grid>

                            {/* Checkbox for terms and conditions */}

                            <Grid item xs={12}>
                                <Box p={2.7} pt={0} pb={0} sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
                                    <Checkbox
                                        name="terms"
                                        checked={formData.terms}
                                        onChange={handleChange}
                                        required
                                        sx={{ paddingRight: 1 }}
                                    />
                                    <Typography variant="body2">
                                        I agree to the{' '}
                                        <Link href="#" underline="hover">
                                            Terms and Conditions {' '}
                                        </Link>
                                        &{' '}
                                        <Link href="#" underline="hover">
                                            Privacy Policy {' '}
                                        </Link>
                                    </Typography>
                                </Box>
                            </Grid>



                        </Grid>
                        {/* Sign Up Button / Register */}

                        <Grid item xs={12}><Button
                            type="submit"
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
