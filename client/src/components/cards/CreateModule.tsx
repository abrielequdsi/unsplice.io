import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// Gql
import { useMutation } from '@apollo/client';
import { CREATE_MODULE } from '../../utils/graphql';
// redux
import { useSelector } from 'react-redux';
import { State } from '../../interfaces';

const theme = createTheme();

const CreateModule = () => {
  const programId = useSelector(
    (state: State) => state.user.userPrograms[0].id,
  );

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: '',
    moduleCode: '',
    desc: '',
  });

  const [createModule] = useMutation(CREATE_MODULE, {
    update(proxy, result) {
      console.log(result);
    },
    onError(err) {
      console.log(err.message);
      setErrors(
        err && err.graphQLErrors[0].extensions
          ? err.graphQLErrors[0].extensions.errors
          : {},
      );
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line no-console

    if (
      input.name.length < 1 ||
      input.moduleCode.length < 1 ||
      input.desc.length < 1
    ) {
      alert('Fields are required');
    } else {
      createModule({
        variables: {
          programId: programId,
          name: input.name,
          moduleCode: input.moduleCode,
          desc: input.desc,
        },
      });

      setInput({
        name: '',
        moduleCode: '',
        desc: '',
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h6">
            Create Module
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  value={input.name}
                  onChange={handleChange}
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Module Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={input.moduleCode}
                  onChange={handleChange}
                  required
                  fullWidth
                  id="moduleCode"
                  label="Module Code"
                  name="moduleCode"
                  autoComplete="moduleCode"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={input.desc}
                  onChange={handleChange}
                  required
                  fullWidth
                  id="desc"
                  label="Description"
                  name="desc"
                  autoComplete="desc"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={!input.name || !input.moduleCode || !input.desc}
              sx={{ mt: 3, mb: 2 }}
            >
              Create
            </Button>

            {Object.keys(errors).length > 0 &&
              Object.values(errors).map((value) => (
                <Alert severity="error" key={value as string} sx={{ mb: 1 }}>
                  {value as string}
                </Alert>
              ))}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default CreateModule;
