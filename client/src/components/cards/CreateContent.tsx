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
import { CREATE_CONTENT } from '../../utils/graphql';
// redux
import { useSelector } from 'react-redux';
import { State } from '../../interfaces';

const theme = createTheme();

const CreateContent = () => {
  const moduleId = useSelector((state: State) => {
    return state.subPage.id;
  });

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    number: '',
    title: '',
    desc: '',
    notionContent: '',
  });

  const [createModule] = useMutation(CREATE_CONTENT, {
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
    console.log(moduleId);
    console.log({
      ...input,
    });

    createModule({
      variables: {
        moduleId: moduleId,
        number: parseInt(input.number),
        title: input.title,
        desc: input.desc,
        notionContent: input.notionContent,
      },
    });

    setInput({
      number: '',
      title: '',
      desc: '',
      notionContent: '',
    });
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
            Create Content
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
                  value={input.title}
                  onChange={handleChange}
                  autoComplete="title"
                  name="title"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={input.number}
                  onChange={handleChange}
                  required
                  fullWidth
                  id="number"
                  label="Number"
                  name="number"
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
              <Grid item xs={12}>
                <TextField
                  value={input.notionContent}
                  onChange={handleChange}
                  required
                  fullWidth
                  id="notionContent"
                  label="Notion Link"
                  name="notionContent"
                  autoComplete="notionContent"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
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

export default CreateContent;
