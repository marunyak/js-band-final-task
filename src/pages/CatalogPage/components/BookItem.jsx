import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function BookItem({ book }) {
  return (
    <div
      className="book col-sm-3 shadow rounded p-3
      mr-3 mb-4 bg-white position
    -relative text-black"
      style={{ height: '400px' }}
    >
      <div className="img-block mb-2">
        <img src={book.cover} alt="" style={{ width: '100%', height: '190px' }} />
      </div>
      <h6 className="title" style={{ height: '48px' }}>{book.title}</h6>
      <p className="text text-break">{book.author}</p>
      <div className="d-flex justify-content-between">
        <div>
          {book.price}
          {' '}
$
        </div>
        <Link to={`/books/${book.id}`}>
          <button type="button" className="btn btn-sm btn-primary">
          View
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BookItem;

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired
  })
};
