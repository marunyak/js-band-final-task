export const ADD_BOOK = 'ADD_BOOK';

export const addToCart = (newValue) => ({
  type: ADD_BOOK,
  payload: { newValue }
});
