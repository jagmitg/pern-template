import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { showSnackbarAction } from '../redux/actions/globalNotificationActions';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from '../redux/actions/profileActions';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2, 0),
    },
    sidePanel: {
      padding: theme.spacing(2),
    },
    avatarIcon: {
      color: '#555',
      width: theme.spacing(28),
      height: theme.spacing(28),
    },
    username: {
      fontWeight: 700,
    },
  })
);

const Profile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const profileData = useSelector((state: any) => state.profile.profileData);

  useEffect(() => {
    dispatch(
      getProfileAction(() =>
        showSnackbarAction('Error retrieving profile.', 'error')
      )
    );
  }, [dispatch]);

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={3}>
          <Box className={classes.sidePanel}>
            <Box>
              <AccountCircleIcon className={classes.avatarIcon} />
            </Box>
            <Typography variant="h5" className={classes.username}>
              {`${profileData.first_name} ${profileData.last_name}`}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              @{profileData.username}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box>
            <Alert severity="warning">
              <AlertTitle>Protected Route</AlertTitle>
              This page uses a protected route that is only accessible if there
              is an access token present. The access token is validated when a
              request is made to the server to collect private information i.e.
              profile details.
            </Alert>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
