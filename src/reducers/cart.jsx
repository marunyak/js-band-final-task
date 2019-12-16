import { ADD_BOOK, PURCHASE_SUCCESS, PURCHASE_FAIL } from '../actions';

const initialState = {
  books: [],
  message: undefined
};

export const cart = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK: {
      let isCheck = false;
      if (state.books.length > 0) {
        const list = state.books.map((item) => {
          if (item.id === payload.newValue.id) {
            isCheck = true;
            // eslint-disable-next-line no-param-reassign
            item = {
              ...item,
              count: payload.newValue.count
            };
          }
          return item;
        });
        if (isCheck) {
          return {
            ...state,
            books: list
          };
        }
        return {
          ...state,
          books: [...state.books, payload.newValue]
        };
      }
      return {
        ...state,
        books: [...state.books, payload.newValue]
      };
    }
    case PURCHASE_SUCCESS: {
      console.log(payload.message);
      return {
        ...initialState, message: payload.message
      };
    }
    case PURCHASE_FAIL: {
      console.log(payload.message);
      return {
        ...state,
        message: payload.message,
        loading: false
      };
    }
    default:
      return state;
  }
};
