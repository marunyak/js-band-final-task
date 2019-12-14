import React from 'react';
import PropTypes from 'prop-types';

function Header({ children }) {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-warning text-white">
      <div>
            JS BAND STORE/ Andrii Maruniak
      </div>
      {children}
    </header>
  );
}
export default Header;

Header.propTypes = {
  children: PropTypes.element
};
