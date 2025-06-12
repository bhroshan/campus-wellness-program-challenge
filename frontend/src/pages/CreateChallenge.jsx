import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import { register, reset } from '../features/auth/authSlice'
import { toast } from 'react-toastify';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';

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

const CreateChallenge = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        instructions: '',

    });

    const { title, description, instructions } = formData


    const navigate = useNavigate()
    const dispatch = useDispatch();



    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,

        }))
    }



    const handleSubmit = (e) => {
        e.preventDefault();


        // console.log(formData);
    };

    return (
        <>
            <Navbar />
            <Button
                variant="contained"
                fullWidth
                startIcon={<AssignmentReturnIcon />}
                onClick={() => navigate('/dashboard')}
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
                Go Back
            </Button>
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
                <Box sx={{}}>

                    <Box sx={{ border: 1, borderColor: 'grey.700' }}>

                        {/* from start */}

                        <form onSubmit={handleSubmit} style={{ padding: '20px', margin: '10px' }}>

                            {/* Title of challenge */}
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
                                Create Wellness Challenge
                            </Typography></Divider>


                            <Grid container display={'flex'} flexDirection={'column'}>

                                {/* title field */}

                                <Grid item xs={12} sm={6} p={2} pt={0}>
                                    <Box pt={3} pb={0} sx={{ width: '100%' }}><TextField
                                        label="Title"
                                        name='title'
                                        id='title'
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        required
                                        type="text"
                                        value={title}
                                        onChange={onChange}
                                    /></Box>
                                </Grid>

                                {/* Description field */}

                                <Grid item xs={12} sm={6} p={2}>
                                    <Box pb={0} sx={{ width: '100%' }}><TextField
                                        label="Description"
                                        name='description'
                                        id='discription'
                                        variant="outlined"
                                        fullWidth
                                        multiline
                                        minRows={4}
                                        margin="normal"
                                        required
                                        type="text"
                                        value={description}
                                        onChange={onChange}
                                    /></Box>
                                </Grid>

                                {/* Instructions field */}

                                <Grid item xs={12} sm={6} p={2}>
                                    <Box pb={0} sx={{ width: '100%' }}><TextField
                                        label="Instructions"
                                        id='instructions'
                                        name='instructions'
                                        variant="outlined"
                                        fullWidth
                                        multiline
                                        minRows={3}
                                        margin="normal"
                                        required
                                        type="text"
                                        value={instructions}
                                        onChange={onChange}
                                    /></Box>
                                </Grid>


                            </Grid>
                            {/* Submit Button  */}

                            <Grid item xs={12}><Button
                                type="submit"
                                id='submit'
                                variant="contained"
                                fullWidth
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
                                Submit
                            </Button>
                            </Grid>
                        </form>



                        {/* from ends */}

                    </Box>
                </Box >
            </Paper >
        </>

    );
};

export default CreateChallenge;
