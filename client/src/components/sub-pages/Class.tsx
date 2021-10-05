import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
//Typescript
import { User } from '../../interfaces';
import { State } from '../../interfaces';
// Components
import ClassCard from '../cards/ClassCard';
import CreateStudent from '../cards/CreateStudent';
// Gql
import { useQuery } from '@apollo/client';
import { GET_CLASSMATES } from '../../utils/graphql';
// redux
import { useSelector } from 'react-redux';

const Class = () => {
  const { userPrograms, userInfo } = useSelector((state: State) => state.user);

  const { loading, data } = useQuery(GET_CLASSMATES, {
    variables: {
      programCode: userPrograms[0].programCode,
    },
  });

  let classmates;
  if (loading) {
    classmates = (
      <Box sx={{ ml: 'auto', mr: 'auto' }}>
        <CircularProgress />
      </Box>
    );
  } else {
    classmates = data.getClassmates.map((user: User) => {
      return (
        <Grid item key={user.id} xs={12} sm={6} md={4} sx={{ p: 2 }}>
          <ClassCard userInfo={user} />
        </Grid>
      );
    });
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
          <Grid container spacing={2} sx={{ p: 2 }}>
            {classmates}
          </Grid>
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
                <CreateStudent />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Class;
