import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigation from '../../components/Navigation';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Spinner from '../../components/spinner/spinner';
import BookItem from './components/BookItem';
import Filter from './components/Filter';
import { getBooksFetch } from '../../services';
import { fetchBooks } from '../../actions';

class Catalog extends React.Component {
  componentDidMount() {
    const { getBooksFetch } = this.props;
    getBooksFetch();
  }

  filter = () => {
    const { books, search, price } = this.props;
    const result = books.filter((item) => (search === '' || item.title.toLowerCase()
      .search(new RegExp(`^${search.toLowerCase()}`, 'g')) !== -1))
      .filter((item) => (this.priceTypes(price, item.price)));
    return result;
  }

  priceTypes = (type, price) => {
    const types = {
      none: price,
      low_price: price > 0 && price < 15,
      medium_price: price > 15 && price < 30,
      high_price: price > 30
    };
    return types[type];
  }


  render() {
    const { loading, error } = this.props;
    const newBooks = this.filter();
    const hasData = !(loading || error);
    const newItem = hasData ? newBooks.map((item) => (
      <BookItem book={item} key={item.id} />
    )) : null;

    return (
      <>
        <Header>
          <Navigation />
        </Header>
        <Main>
          <Filter />
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
    error: state.catalog.error,
    search: state.filter.search,
    price: state.filter.price,
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
  search: PropTypes.string,
  price: PropTypes.string,
};
