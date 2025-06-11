
import {
    AppBar,
    Box,
    Button,
    Typography,
    Grid
} from '@mui/material';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Navbar = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ p: 2, backgroundColor: '#424242' }}>
                    <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Grid item> <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Campus Wellness Challenge Platform
                        </Typography></Grid>

                        <Grid item> <Button
                            type="submit"
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
