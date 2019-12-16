export const LOAD_BOOK_SUCCESS = 'LOAD_BOOK_SUCCESS';
export const LOAD_BOOK_FAIL = 'LOAD_BOOK_FAIL';

export const fetchBookSuccess = (data) => ({
  type: LOAD_BOOK_SUCCESS,
  payload: data
});

export const fetchBookFail = (err) => ({
  type: LOAD_BOOK_FAIL,
  payload: err
});
