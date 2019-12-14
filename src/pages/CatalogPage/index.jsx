import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from '../../components/Header';

function Catalog() {
  return (
    <div>
      <Header>
        <Navigation />
      </Header>
    </div>
  );
}

export default withRouter(connect(null)(Catalog));
