import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Router, Switch } from 'react-router-dom';
import { verifyUser } from './actions/authActions';
import history from './config/history';
import Frontend from './containers/Frontend';
import Backend from './containers/Backend';

const App = ({ verifyUser }) => {

  useEffect(() => verifyUser(), [verifyUser]);

  return (
    <Router history={history}>
      <Switch>
        <Frontend />
      </Switch>

      <Switch>
        <Backend />
      </Switch>
    </Router>
  );
}

export default connect(null, { verifyUser })(App);