import React, { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// Components
import Copyright from '../components/Copyright';
// Gql
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/graphql';
// redux
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/user.action';

const theme = createTheme();

const Login = (props: { history: string[] }) => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(proxy, result) {
      console.log(result);
      dispatch(login(result.data.login));
      props.history.push('/');
    },
    onError(err) {
      console.log(err);

      setErrors(
        err && err.graphQLErrors[0].extensions
          ? err.graphQLErrors[0].extensions.errors
          : {},
      );
    },
  });

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    loginUser({
      variables: {
        email: data.get('email'),
        password: data.get('password'),
      },
    });

    // console.log({
    //     email: data.get('email'),
    //     password: data.get('password'),
    // });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            {loading && <LinearProgress sx={{ mb: 1 }} />}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            {Object.keys(errors).length > 0 &&
              Object.values(errors).map((value) => (
                <Alert severity="error" key={value as string} sx={{ mb: 1 }}>
                  {value as string}
                </Alert>
              ))}
          </Box>
        </Box>
        <Copyright sx={{ mt: 5, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Login;
