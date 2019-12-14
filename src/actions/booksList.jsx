export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAIL = 'FETCH_BOOKS_FAIL';

export const fetchBooks = () => ({
  type: FETCH_BOOKS,
});

export const fetchBooksSuccess = (payload) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload,
});

export const fetchBooksFail = (error) => ({
  type: FETCH_BOOKS_FAIL,
  error,
});
