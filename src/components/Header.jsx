import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Header({ children, user }) {
  const val = 'JS BAND STORE/ Andrii Maruniak';
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-warning text-white">
      <div style={{ cursor: 'pointer' }}>
        {user.token ? <Link className="text-white" to="/books">{val}</Link>
          : <Link className="text-white" to="/signin">{val}</Link>}
      </div>
      {children}
    </header>
  );
}
export default connect(({ user }) => ({ user }))(Header);

Header.propTypes = {
  children: PropTypes.element,
  user: PropTypes.shape({
    token: PropTypes.string.isRequired,
  }).isRequired
};
