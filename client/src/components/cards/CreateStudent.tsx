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
// Typescript
import { State } from '../../interfaces';
// Gql
import { useMutation } from '@apollo/client';
import { REGISTER_STUDENT } from '../../utils/graphql';
// redux
import { useSelector } from 'react-redux';

const theme = createTheme();

const CreateStudent = () => {
  const programCode = useSelector(
    (state: State) => state.user.userPrograms[0].programCode,
  );

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    institution: '',
    picture: '',
    github: '',
    instagram: '',
    linkedin: '',
    website: '',
  });

  const [registerStudent] = useMutation(REGISTER_STUDENT, {
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
    registerStudent({
      variables: {
        ...input,
        role: 'student',
        programCode: programCode,
      },
    });
    setInput({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      institution: '',
      picture: '',
      github: '',
      instagram: '',
      linkedin: '',
      website: '',
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
            Register User
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={input.firstName}
                  onChange={handleChange}
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={input.lastName}
                  onChange={handleChange}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={input.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={input.password}
                  onChange={handleChange}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={input.confirmPassword}
                  onChange={handleChange}
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="confirmPass"
                  id="confirmPass"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography component="h6" variant="h6" color="text.secondary">
                  Extra
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={input.picture}
                  onChange={handleChange}
                  name="picture"
                  fullWidth
                  id="picture"
                  label="Picture Link"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={input.institution}
                  onChange={handleChange}
                  name="institution"
                  fullWidth
                  id="institution"
                  label="Institution"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography component="h6" variant="h6" color="text.secondary">
                  Social Links
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  value={input.github}
                  onChange={handleChange}
                  name="github"
                  fullWidth
                  id="github"
                  label="Github"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={input.instagram}
                  onChange={handleChange}
                  fullWidth
                  id="instagram"
                  label="Instagram"
                  name="instagram"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={input.linkedin}
                  onChange={handleChange}
                  name="linkedin"
                  fullWidth
                  id="linkedin"
                  label="Linkedin"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={input.website}
                  onChange={handleChange}
                  fullWidth
                  id="website"
                  label="Website"
                  name="website"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
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

export default CreateStudent;
