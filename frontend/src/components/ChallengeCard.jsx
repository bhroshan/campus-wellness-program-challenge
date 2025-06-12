import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { API_URL } from '../configs';

function ChallengeCard({ challenge, onViewDetails, onAction, actionLabel, actionColor = "primary" }) {
    return (
        <Card>
            <CardMedia
                sx={{ height: 200 }}
                image={challenge.image ? `${API_URL}${challenge.image}` : '/default-challenge.jpg'}
                title={challenge.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {challenge.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {challenge.description.substring(0, 40)}...
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