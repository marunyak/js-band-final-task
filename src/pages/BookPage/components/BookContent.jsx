import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BookCounter from './BookCounter';
import Spinner from '../../../components/spinner/spinner';

function BookContent(props) {
  const { book } = props;
  if (book.isLoading) return <Spinner />;
  if (!book.isLoading && book.error) return 'Error ...';
  if (!book.id) return !1;

  return (
    <div className="d-flex m-3">
      <div className="image-item mr-5" style={{ width: '460px' }}>
        <img src={book.cover} alt={book.title} className="mb-2 border" style={{ width: '460px' }} />
        <p>
Description:
          {book.description}
        </p>
      </div>
      <div className="desc" style={{ width: '400px' }}>
        <div className="title mb-3 pt-4">
          <h3>{book.title}</h3>
        </div>
        <div className="title mb-3">
          Author:
          {' '}
          {book.author}
        </div>
        <div className="level mb-3">
          Level:
          {' '}
          {book.level}
        </div>
        <div className="tags mb-2">
          Tags:
          {' '}
          {book.tags.map((item) => item).join(', ')}
        </div>
      </div>
      <BookCounter book={book} />
    </div>
  );
}
export default connect(({ book }) => ({ book }))(BookContent);

BookContent.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    count: PropTypes.number,
    price: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    level: PropTypes.string,
    description: PropTypes.string,
    cover: PropTypes.string,
    tags: PropTypes.array,
    isLoading: PropTypes.bool,
    error: PropTypes.bool
  })
};
