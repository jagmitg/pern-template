import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserAction } from '../redux/actions/authenticationActions';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import Box from '@material-ui/core/Box';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      background: '#24292e',
      color: '#fff',
    },
    logoText: {
      color: '#fff',
      display: 'inline-block',
    },
    logoLink: {
      display: 'block',
      '& > *': {
        verticalAlign: 'middle',
      },
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    btnLink: {
      margin: theme.spacing(1, 1.5),
    },
    icon: {
      marginRight: theme.spacing(1),
      color: '#fff',
      width: '1.8rem',
      height: '1.8rem',
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
  })
);

const Nav = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  let username;
  const userData = useSelector((state: any) => state.authentication.userData);
  if (userData && userData.username) {
    username = userData.username;
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    dispatch(logoutUserAction());
    handleClose();
  };

  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Box className={classes.toolbarTitle}>
          <Link
            component={RouterLink}
            to="/"
            underline="none"
            color="textPrimary"
            className={classes.logoLink}
          >
            <FlashOnIcon className={classes.icon} />
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.logoText}
            >
              PERN Template
            </Typography>
          </Link>
        </Box>
        {username ? (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar className={classes.orange}>
                {username.substr(0, 1).toLowerCase()}
              </Avatar>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                component={RouterLink}
                to="/profile"
                onClick={handleClose}
              >
                Profile
              </MenuItem>
              <MenuItem onClick={() => handleSignOut()}>Sign out</MenuItem>
            </Menu>
          </div>
        ) : (
          <>
            <Link
              component={RouterLink}
              variant="button"
              color="inherit"
              to="/signup"
              className={classes.btnLink}
            >
              Sign Up
            </Link>
            <Button
              component={RouterLink}
              to="/signin"
              color="primary"
              variant="contained"
              className={classes.btnLink}
            >
              Sign In
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
