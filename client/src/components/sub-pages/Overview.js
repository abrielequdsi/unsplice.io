import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// Gql
import { useQuery } from "@apollo/client";
import { GET_MODULE_LIST } from '../../utils/graphql';
// redux
import { useSelector } from 'react-redux';

const Overview = () => {
    const programInfo = useSelector(state => state.user.programInfo);

    const { loading, data } = useQuery(GET_MODULE_LIST, {
        variables: {
            programId: programInfo[0].id
        }
    })

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        {/* Here */}

                    </Paper>
                </Grid>
                <Grid item xs={12}>

                </Grid>

            </Grid>
        </Container>
    )
}

export default Overview
