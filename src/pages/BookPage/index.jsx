import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigation from '../../components/Navigation';
import Header from '../../components/Header';
import Main from '../../components/Main';
import BookContent from './components/BookContent';
import { getBookFetch } from '../../services';

class Book extends React.Component {
  componentDidMount() {
    const { getBookFetch, match } = this.props;
    const { id } = match.params;
    getBookFetch(id);
  }

  render() {
    return (
      <>
        <Header>
          <Navigation />
        </Header>
        <Main>
          <BookContent />
        </Main>
      </>
    );
  }
}

export default withRouter(connect(null, { getBookFetch })(Book));

Book.propTypes = {
  getBookFetch: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.object,
  })
};
