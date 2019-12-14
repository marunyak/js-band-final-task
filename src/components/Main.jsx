import React from 'react';
import PropTypes from 'prop-types';

function Main({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}
export default Main;

Main.propTypes = {
  children: PropTypes.element
};
