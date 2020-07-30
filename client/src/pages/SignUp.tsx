import React, { useState, FormEvent } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Theme, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import {
  usernameIsValid,
  passwordIsValid,
  emailIsValid,
} from '../utils/validation/authentication';
import {
  checkUsernameAction,
  registerUserAction,
} from '../redux/actions/authenticationActions';
import { showSnackbarAction } from '../redux/actions/globalNotificationActions';
import { deepOrange } from '@material-ui/core/colors';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const getFormValid = () => {
    let formValid: boolean = true;

    if (!firstName) {
      formValid = false;
      setFirstNameError('Required');
    } else {
      setFirstNameError('');
    }

    if (!lastName) {
      formValid = false;
      setLastNameError('Required');
    } else {
      setLastNameError('');
    }

    if (!usernameIsValid(username.trim())) {
      setUsernameError('Invalid username');
      formValid = false;
    } else {
      setUsernameError('');
    }

    if (!passwordIsValid(password.trim())) {
      formValid = false;
      setPasswordError('Invalid password');
      setPassword('');
    } else {
      setPasswordError('');
    }

    if (!emailIsValid(email.trim())) {
      formValid = false;
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }

    return formValid;
  };

  const resetForm = (): void => {
    setUsername('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  const onSubmit = (
    event: FormEvent,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string
  ): void => {
    event.preventDefault();

    if (getFormValid()) {
      //check if username exists
      checkUsernameAction(
        username,
        (data: any) => {
          if (data) {
            setUsernameError('Username is already taken');
          } else {
            //register the user
            dispatch(
              registerUserAction(
                username,
                password,
                firstName,
                lastName,
                email,
                () =>
                  dispatch(
                    showSnackbarAction('Registration successful.', 'success')
                  ),
                () =>
                  dispatch(showSnackbarAction('Registration failure.', 'error'))
              )
            );

            resetForm();
          }
        },
        () => {
          console.error('Unknown error occured in checkUsernameAction');
        }
      );
    }
  };

  return (
    <Container className="page sign-up" component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={(event) =>
            onSubmit(event, username, password, firstName, lastName, email)
          }
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                helperText={firstNameError}
                error={firstNameError !== ''}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                helperText={lastNameError}
                error={lastNameError !== ''}
                onChange={(event) => setLastName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                helperText={emailError}
                error={emailError !== ''}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={username}
                helperText={usernameError}
                error={usernameError !== ''}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                helperText={passwordError}
                error={passwordError !== ''}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link component={RouterLink} to="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SignUp;
