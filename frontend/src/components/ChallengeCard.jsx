import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { API_URL } from '../configs';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

function ChallengeCard({ challenge, onViewDetails, onAction, actionLabel, actionColor = "primary", showEdit }) {
    const navigate = useNavigate();
    return (
        <Card sx={{ position: 'relative', width: 340, minHeight: 350, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {showEdit && (
                <IconButton
                    size="small"
                    sx={{ position: 'absolute', top: 8, right: 8, zIndex: 2, background: 'white', boxShadow: 1 }}
                    onClick={() => navigate(`/edit-challenge/${challenge._id}`)}
                >
                    <EditIcon fontSize="small" color="primary" />
                </IconButton>
            )}
            <CardMedia
                sx={{ height: 200, width: '100%' }}
                image={challenge.image ? `${API_URL}${challenge.image}` : '/default-challenge.jpg'}
                title={challenge.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div" sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontWeight: 600,
                    fontSize: 18
                }}>
                    {challenge.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    minHeight: 48
                }}>
                    {challenge.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    variant='outlined' 
                    size="small" 
                    onClick={() => onViewDetails(challenge._id)}
                >
                    View Details
                </Button>
                {onAction && (
                    <Button 
                        variant='outlined' 
                        color={actionColor}
                        size="small"
                        onClick={() => onAction(challenge._id)}
                    >
                        {actionLabel}
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}

export default ChallengeCard;  