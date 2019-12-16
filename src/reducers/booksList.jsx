import { FETCH_BOOKS, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAIL } from '../actions';

const initialState = {
  books: [],
  loading: false,
  error: false,
};

export const catalog = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_BOOKS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: [...payload],
        loading: false,
      };
    case FETCH_BOOKS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
