import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Header from '../../components/Header';

class Catalog extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default withRouter(connect(null)(Catalog));
