import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Grid,
    Paper,
    Divider,
    TextField,
    Typography
} from '@mui/material';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';

const CreateChallenge = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        instructions: '',
    });

    const { title, description, instructions } = formData;
    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Button
                variant="contained"
                startIcon={<AssignmentReturnIcon />}
                onClick={() => navigate('/dashboard')}
                sx={{
                    mb: 2,
                    backgroundColor: "#EEEEEE",
                    color: 'black',
                    '&:hover': {
                        backgroundColor: "#BDBDBD",
                    }
                }}
            >
                Go Back
            </Button>

            <Paper
                elevation={3}
                sx={{
                    width: '100%',
                    p: 3,
                    borderRadius: 2
                }}
            >
                <form onSubmit={handleSubmit}>
                    <Typography
                        variant="h5"
                        sx={{
                            mb: 3,
                            fontWeight: 500,
                            letterSpacing: 1,
                        }}
                    >
                        Create Wellness Challenge
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                label="Title"
                                name='title'
                                id='title'
                                variant="outlined"
                                fullWidth
                                required
                                value={title}
                                onChange={onChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Description"
                                name='description'
                                id='description'
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                required
                                value={description}
                                onChange={onChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Instructions"
                                id='instructions'
                                name='instructions'
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={3}
                                required
                                value={instructions}
                                onChange={onChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: "#424242",
                                    '&:hover': {
                                        backgroundColor: "black",
                                    }
                                }}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Box>
    );
};

export default CreateChallenge;
