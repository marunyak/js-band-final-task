import { LOAD_BOOK } from '../actions';

const initialState = {
  id: undefined,
  title: undefined,
  author: undefined,
  level: undefined,
  description: undefined,
  cover: undefined,
  tags: undefined
};

export const book = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_BOOK:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};
