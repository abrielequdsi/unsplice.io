import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

const ModuleCard = ({ content: { id, number, completed, title, desc } }) => {

    const theme = useTheme();

    return (
        <Card sx={{ display: 'flex', mb: 2 }}>
            <CardContent sx={{ mt: 1.5, ml: 2 }} >
                <Typography component="div" variant="h7">
                    1.
                </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h7">
                        {title}
                    </Typography>
                    <Typography variant="caption text" color="text.secondary" >
                        {desc}
                    </Typography>
                </CardContent>
            </Box>
            <CardContent >
                <Typography component="div" variant="h7">
                    <Checkbox defaultChecked />
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ModuleCard;