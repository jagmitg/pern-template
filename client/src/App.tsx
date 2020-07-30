import React from 'react';
import { history } from './config/history';
import store from './redux/store';
import { Provider } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Nav from './components/Nav';
import CustomSnackbar from './components/CustomSnackbar';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <CssBaseline />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Redirect from="*" to="/" />
        </Switch>
        <CustomSnackbar />
      </Router>
    </Provider>
  );
};

export default App;
