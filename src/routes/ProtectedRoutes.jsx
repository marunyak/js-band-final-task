import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Catalog from '../pages/CatalogPage';
import NotFound from '../pages/NotFoundPage';
import SignIn from '../pages/SignInPage';

function ProtectedRoutes({ userToken }) {
  return userToken ? (
    <>
      <Switch>
        <Redirect from="/signin" to="/books" />
        <Route path="/books" component={Catalog} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  )
    : (
      <>
        <Redirect from="/" to="/signin" />
        <Route path="/signin" component={SignIn} />
      </>
    );
}

const mapStateToProps = (state) => ({
  userToken: state.user.token,
});
export default connect(mapStateToProps)(ProtectedRoutes);

ProtectedRoutes.propTypes = {
  userToken: PropTypes.string
};
