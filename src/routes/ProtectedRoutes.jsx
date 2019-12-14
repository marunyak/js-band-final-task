import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Catalog from '../pages/CatalogPage';
import NotFound from '../pages/NotFoundPage';

function ProtectedRoutes({ userToken }) {
  return userToken ? (
    <>
      <Switch>
        <Route path="/books" component={Catalog} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
    : (<Redirect to="/signin" />);
}

const mapStateToProps = (state) => ({
  userToken: state.user.token,
});
export default connect(mapStateToProps)(ProtectedRoutes);

ProtectedRoutes.propTypes = {
  userToken: PropTypes.string
};
