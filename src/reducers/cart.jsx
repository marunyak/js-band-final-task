import { ADD_BOOK } from '../actions';

const initialState = {
  books: {},
};

export const cart = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK: {
      return {
        ...state,
        books: { ...state.books, ...payload.newValue }
      };
    }
    default:
      return state;
  }
};
