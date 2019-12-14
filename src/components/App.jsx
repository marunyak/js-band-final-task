import React from 'react';
import {
  HashRouter as Router, Switch, Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { checkSign } from '../actions';
import SignIn from '../pages/SignInPage';
import ProtectedRoutes from '../routes/ProtectedRoutes';

function App({ checkSign }) {
  checkSign();
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route component={ProtectedRoutes} />
      </Switch>
    </Router>
  );
}

export default connect(null, { checkSign })(App);

App.propTypes = {
  checkSign: PropTypes.func
};
