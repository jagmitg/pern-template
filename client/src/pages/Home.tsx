import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  chipContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
      backgroundColor: '#f1f8ff',
      color: '#0366d6',
      fontWeight: 500,
    },
    '& > *:hover, & > *:focus': {
      textDecoration: 'none',
      backgroundColor: '#def',
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className="page home">
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Build with PERN
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Lightweight PERN template with built-in Passport authentication.
          </Typography>

          <div className={classes.chipContainer}>
            <Chip
              size="small"
              label="PostgreSQL"
              clickable
              component={Link}
              href="https://www.postgresql.org/"
              target="_blank"
            />
            <Chip
              size="small"
              label="Express"
              clickable
              component={Link}
              href="https://expressjs.com/"
              target="_blank"
            />
            <Chip
              size="small"
              label="React"
              clickable
              component={Link}
              href="https://reactjs.org/"
              target="_blank"
            />
            <Chip
              size="small"
              label="Node"
              clickable
              component={Link}
              href="https://nodejs.org/"
              target="_blank"
            />
            <Chip
              size="small"
              label="TypeScript"
              clickable
              component={Link}
              href="https://www.typescriptlang.org/"
              target="_blank"
            />
            <Chip
              size="small"
              label="Passport"
              clickable
              component={Link}
              href="http://www.passportjs.org/"
              target="_blank"
            />
            <Chip
              size="small"
              label="JWT"
              clickable
              component={Link}
              href="https://jwt.io/"
              target="_blank"
            />
            <Chip
              size="small"
              label="BCrypt"
              clickable
              component={Link}
              href="https://github.com/kelektiv/node.bcrypt.js"
              target="_blank"
            />
            <Chip
              size="small"
              label="Axios"
              clickable
              component={Link}
              href="https://github.com/axios/axios"
              target="_blank"
            />
            <Chip
              size="small"
              label="Redux"
              clickable
              component={Link}
              href="https://redux.js.org/"
              target="_blank"
            />
            <Chip
              size="small"
              label="Material-UI"
              clickable
              component={Link}
              href="https://material-ui.com/"
              target="_blank"
            />
            <Chip
              size="small"
              label="Husky"
              clickable
              component={Link}
              href="https://github.com/typicode/husky"
              target="_blank"
            />
            <Chip
              size="small"
              label="Prettier"
              clickable
              component={Link}
              href="https://prettier.io/"
              target="_blank"
            />
          </div>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  component={RouterLink}
                  to="/signup"
                >
                  Get Started
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<GitHubIcon />}
                  href="https://github.com/t-blackwell/pern-template"
                >
                  View on GitHub
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
