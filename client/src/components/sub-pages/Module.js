import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '../cards/LinearProgress';
// Components
import ModuleCard from '../cards/ModuleCard';
// Gql
import { useQuery } from "@apollo/client";
import { GET_MODULE } from '../../utils/graphql';
// redux
import { useSelector } from 'react-redux';

const Modules = () => {

    const moduleId = useSelector(state => state.subPage.id)

    const { loading, data } = useQuery(GET_MODULE, {
        variables: {
            moduleId: moduleId
        }
    })

    let module;
    if (loading) {
        module = (
            <Box sx={{ display: 'flex', align: 'center' }}>
                <CircularProgress />
            </Box>)
    } else {
        module = (
            data.getModule.contents.map((content) => {
                return (
                    <ModuleCard content={content} />
                )
            })
        )
    }

    let moduleDesc;
    if (loading) {
        moduleDesc = (
            <Box sx={{ display: 'flex', align: 'center' }}>
                <CircularProgress />
            </Box>)
    } else {
        moduleDesc = (
            <Box sx={{ align: 'center' }}>
                <Typography component="div" variant="h7">
                    {data.getModule.name}
                </Typography>
                <Typography variant="caption text" color="text.secondary">
                    {data.getModule.desc}
                </Typography>
                <LinearProgress value={data.getModule.progress} sx={{ mr: 10 }} />
            </Box>
        )
    }


    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        {moduleDesc}
                    </Paper>
                </Grid>
                <Grid item xs={12} sx={{ ml: 1 }}>
                    <Typography variant="h7 text" color="text.secondary">
                        Module Content:
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    {module}
                </Grid>

            </Grid>
        </Container >
    )
}

export default Modules
