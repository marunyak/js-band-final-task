export const CHANGE_FILTER = 'CHANGE_FILTER';
export const FILTER_BOOKS = 'FILTER_BOOKS';

export const changeFilter = (newValue) => ({
  type: CHANGE_FILTER,
  payload: { newValue }
});
