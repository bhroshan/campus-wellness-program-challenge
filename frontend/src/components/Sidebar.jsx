
import Avatar from '@mui/material/Avatar';
import profileImg from '../pages/images/profile.jpg'
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


function Sidebar() {
    return (
        <>
            <Grid container sx={{ backgroundColor: '#E1F5FE', width: '100%' }}>
                <Grid
                    item
                    sm={12}
                    sx={{
                        backgroundColor: '#E0E0E0',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Centers horizontally
                        justifyContent: 'center', // Centers vertically (if height is defined)
                        py: 2, // Padding top & bottom
                    }}
                >
                    <Avatar
                        alt="Profile Image"
                        src={profileImg}
                        sx={{ width: 100, height: 100, mb: 2 }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 500 }} px={2}>
                        Roshan Bhandary
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: 'gray' }} px={2}>
                        Coordinator
                    </Typography>
                </Grid>
                <Grid item
                    sm={12}
                    sx={{
                        backgroundColor: '#E0E0E0',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Centers horizontally
                        justifyContent: 'center', // Centers vertically (if height is defined)
                        py: 1, // Padding top & bottom
                    }}></Grid>
            </Grid>
        </>
    )
}

export default Sidebar