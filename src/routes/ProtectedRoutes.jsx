import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Catalog from '../pages/CatalogPage';
import NotFound from '../pages/NotFoundPage';
import Book from '../pages/BookPage';
import Cart from '../pages/CartPage';

function ProtectedRoutes({ userToken }) {
  return userToken ? (
    <>
      <Switch>
        <Redirect from="/signin" to="/books" />
        <Route path="/books/:id" component={Book} />
        <Route path="/books" component={Catalog} />
        <Route path="/cart" component={Cart} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  )
    : (
      <>
        <Redirect to="/signin" />
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
