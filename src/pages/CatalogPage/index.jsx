import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigation from '../../components/Navigation';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Spinner from '../../components/spinner/spinner';
import BookItem from './components/BookItem';
import { getBooksFetch } from '../../services';
import { fetchBooks } from '../../actions';

class Catalog extends React.Component {
  componentDidMount() {
    const { getBooksFetch } = this.props;
    getBooksFetch();
  }

  render() {
    const { books, loading, error } = this.props;
    const hasData = !(loading || error);
    const newItem = hasData ? books.map((item) => (
      <BookItem book={item} key={item.id} />
    )) : null;

    return (
      <>
        <Header>
          <Navigation />
        </Header>
        <Main>
          <div className="books-list d-flex flex-wrap justify-content-center mt-5">
            { loading ? <Spinner /> : null }
            {!loading && error && 'Error ...'}
            {newItem}
          </div>
        </Main>
      </>
    );
  }
}

const mapStateToProps = (state) => (
  {
    books: state.catalog.books,
    loading: state.catalog.loading,
    error: state.catalog.error
  }
);

const mapDispatchToProps = (dispatch) => ({
  getBooksFetch: () => {
    dispatch(fetchBooks());
    return dispatch(getBooksFetch());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Catalog));

Catalog.propTypes = {
  getBooksFetch: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  books: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};
