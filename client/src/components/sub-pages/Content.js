import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// Gql
import { useQuery } from "@apollo/client";
import { GET_CONTENT } from '../../utils/graphql';
// redux
import { useSelector } from 'react-redux';

const Content = () => {

    const { moduleId, contentId } = useSelector(state => state.subPage.id)

    const { loading, data } = useQuery(GET_CONTENT, {
        variables: {
            moduleId: moduleId,
            contentId: contentId
        }
    })

    let content;
    if (loading) {
        content = (
            <Box sx={{ display: 'flex', align: 'center' }}>
                <CircularProgress />
            </Box>)
    } else {
        content = (
            <Box sx={{ display: 'flex', align: 'center' }}>
                {/* <CardMedia
                    component="iframe"
                    height="140"
                    image={data.getContent.videoContent.link}
                    title="Video" /> */}
            </Box>)
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        {console.log(data)}
                        {content}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Content
