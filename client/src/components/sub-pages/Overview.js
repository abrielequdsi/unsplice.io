import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// Components
import OverviewCard from '../cards/OverviewCard';
import CreateModule from '../cards/CreateModule';
// Gql
import { useQuery } from "@apollo/client";
import { GET_MODULE_LIST } from '../../utils/graphql';
// redux
import { useSelector } from 'react-redux';

const Overview = () => {
    const { userPrograms, userInfo } = useSelector(state => state.user);

    const { loading, data } = useQuery(GET_MODULE_LIST, {
        variables: {
            programId: userPrograms[0].id
        }
    })

    let moduleList;
    if (loading) {
        moduleList = (
            <Box sx={{ ml: 'auto', mr: 'auto' }}>
                <CircularProgress />
            </Box>)
    } else {
        moduleList = (
            data.getModuleList.map((module) => {
                return (
                    <Grid item key={module.id} xs={12} sm={6} md={4} sx={{ p: 2 }}>
                        <OverviewCard module={module} />
                    </Grid>
                )
            }))
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        {/* Here */}

                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2} sx={{ p: 2, }}>
                        {moduleList}
                    </Grid>
                </Grid>
            </Grid>
            {
                (userInfo.role === 'teacher')
                &&
                (<Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>

                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2} sx={{ p: 2, }}>
                            <Paper sx={{ p: 2, m: 'auto' }}>
                                <CreateModule />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>)
            }

        </Container>
    )
}

export default Overview
