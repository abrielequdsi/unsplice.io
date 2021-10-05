import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '../cards/LinearProgress';
// Components
import ModuleCard from '../cards/ModuleCard';
// Components
import CreateContent from '../cards/CreateContent';
// Gql
import { useQuery } from '@apollo/client';
import { GET_MODULE } from '../../utils/graphql';
// redux
import { useSelector } from 'react-redux';

import { Content, State } from '../../interfaces';

const Module = () => {
  const moduleId = useSelector((state: State) => state.subPage.id);
  const { userInfo } = useSelector((state: State) => state.user);

  const { loading, data } = useQuery(GET_MODULE, {
    variables: {
      moduleId: moduleId,
    },
  });

  let module;
  if (loading) {
    module = (
      <Box sx={{ display: 'flex', align: 'center' } as any}>
        <CircularProgress />
      </Box>
    );
  } else {
    module = data.getModule.contents.map((content: Content) => {
      return (
        <ModuleCard key={content.id} content={content} moduleId={moduleId} />
      );
    });
  }

  let moduleDesc;
  if (loading) {
    moduleDesc = (
      <Box sx={{ ml: 'auto', mr: 'auto' }}>
        <CircularProgress />
      </Box>
    );
  } else {
    moduleDesc = (
      <Box sx={{ align: 'center' } as any}>
        <Typography component="div" variant="h6">
          {data.getModule.name}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {data.getModule.desc}
        </Typography>
        <Box sx={{ mt: '10px' }}>
          <LinearProgress value={data.getModule.progress} />
        </Box>
      </Box>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            {moduleDesc}
          </Paper>
        </Grid>
        <Grid item xs={12} sx={{ ml: 1 }}>
          <Typography variant="h6" color="text.secondary">
            Module Content:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {module}
        </Grid>
      </Grid>
      {userInfo.role === 'teacher' && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              sx={{ p: 2, display: 'flex', flexDirection: 'column' }}
            ></Paper>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} sx={{ p: 2 }}>
              <Paper sx={{ p: 2, m: 'auto' }}>
                <CreateContent />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Module;
