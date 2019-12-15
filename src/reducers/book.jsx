import { LOAD_BOOK_SUCCESS, LOAD_BOOK_FAIL } from '../actions';

const initialState = {
  id: undefined,
  title: undefined,
  author: undefined,
  level: undefined,
  description: undefined,
  cover: undefined,
  tags: undefined,
  isLoading: true,
  loaded: false,
  error: null
};

export const book = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_BOOK_SUCCESS:
      return {
        ...state,
        ...payload,
        isLoading: false
      };
    case LOAD_BOOK_FAIL:
      return {
        ...state,
        error: payload.err,
        isLoading: false,
      };
    default:
      return state;
  }
};
